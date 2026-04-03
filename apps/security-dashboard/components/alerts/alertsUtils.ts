import type { Alert } from "@/types/alert";
import type { AlertFilter, AlertSummary } from "./types";

export const DEFAULT_ALERT_FILTERS: AlertFilter = {
	severity: "all",
	status: "all",
	assignee: "all",
	query: "",
	date: null,
};

export function buildAlertSummary(rows: Alert[]): AlertSummary {
	const critical = rows.filter((r) => r.severity === "Critical").length;
	const open = rows.filter((r) => r.status === "Open").length;
	const inProgress = rows.filter((r) => r.status === "In Progress").length;
	const assigned = rows.filter((r) => !!r.assignee).length;

	return { critical, open, inProgress, assigned };
}

export function filterAlerts(rows: Alert[], filters: AlertFilter): Alert[] {
	const q = filters.query.trim().toLowerCase();
	const filterDate = filters.date ? filters.date.toISOString().slice(0, 10) : null;

	return rows.filter((r) => {
		const severityOk = filters.severity === "all" || r.severity === filters.severity;
		const statusOk = filters.status === "all" || r.status === filters.status;
		const assigneeOk =
			filters.assignee === "all" ||
			(filters.assignee === "Unassigned" && !r.assignee) ||
			r.assignee === filters.assignee;

		const queryOk =
			!q ||
			r.id.toLowerCase().includes(q) ||
			r.title.toLowerCase().includes(q) ||
			r.description.toLowerCase().includes(q) ||
			r.source.toLowerCase().includes(q);

		const dateOk = !filterDate || r.timestamp.slice(0, 10) === filterDate;

		return severityOk && statusOk && assigneeOk && queryOk && dateOk;
	});
}

export function buildAssigneeOptions(rows: Alert[]) {
	const names = Array.from(new Set(rows.map((r) => r.assignee).filter(Boolean) as string[]));

	return [
		{ label: "All Assignees", value: "all" },
		...names.map((name) => ({ label: name, value: name })),
		{ label: "Unassigned", value: "Unassigned" },
	];
}

export function formatUtc(iso: string) {
	const dt = new Date(iso);

	return dt.toLocaleString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		timeZone: "UTC",
	});
}

export function exportAlertsCsv(rows: Alert[]) {
	const header = [
		"id",
		"timestamp",
		"severity",
		"title",
		"description",
		"source",
		"status",
		"assignee",
	];

	const lines = rows.map((r) =>
		[
			r.id,
			r.timestamp,
			r.severity,
			`"${r.title.replace(/"/g, '""')}"`,
			`"${r.description.replace(/"/g, '""')}"`,
			r.source,
			r.status,
			r.assignee ?? "",
		].join(",")
	);

	const csv = [header.join(","), ...lines].join("\n");
	const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "alerts.csv";
	a.click();
	URL.revokeObjectURL(url);
}
