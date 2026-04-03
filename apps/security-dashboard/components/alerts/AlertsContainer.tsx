"use client";

import { useMemo, useState } from "react";
import type { Alert } from "@/types/alert";
import FilterBar from "@/components/FilterBar";
import AlertsHeader from "./AlertsHeader";
import AlertsStatsGrid from "./AlertsStatsGrid";
import AlertsTable from "./AlertsTable";
import {
	DEFAULT_ALERT_FILTERS,
	buildAlertSummary,
	filterAlerts,
	buildAssigneeOptions,
	exportAlertsCsv,
} from "./alertsUtils";
import type { FilterValues } from "@/types/filterValues";

export default function AlertsContainer({ rows }: { rows: Alert[] }) {
	const [filters, setFilters] = useState(DEFAULT_ALERT_FILTERS);

	const summary = useMemo(() => buildAlertSummary(rows), [rows]);
	const filtered = useMemo(() => filterAlerts(rows, filters), [rows, filters]);
	const assigneeOptions = useMemo(() => buildAssigneeOptions(rows), [rows]);

	const filterBarInitialValues: FilterValues = {
		status: "all",
		severity: "all",
		service: "all",
		date: null,
	};

	return (
		<div className="tw-space-y-5">
			<AlertsHeader total={filtered.length} />

			<AlertsStatsGrid summary={summary} />

			<FilterBar
				title="Alert Filters"
				subtitle="Refine your security alerts by status, severity, owner, and date"
				serviceLabel="Owner"
				exportLabel="Export CSV"
				initialValues={filterBarInitialValues}
				statusOptions={[
					{ label: "All Status", value: "all" },
					{ label: "Open", value: "Open" },
					{ label: "In Progress", value: "In Progress" },
					{ label: "Resolved", value: "Resolved" },
					{ label: "Closed", value: "Closed" },
				]}
				severityOptions={[
					{ label: "All Levels", value: "all" },
					{ label: "Low", value: "Low" },
					{ label: "Medium", value: "Medium" },
					{ label: "High", value: "High" },
					{ label: "Critical", value: "Critical" },
				]}
				serviceOptions={assigneeOptions}
				onChange={(values) =>
					setFilters((prev) => ({
						...prev,
						status: values.status as Alert["status"] | "all",
						severity: values.severity as Alert["severity"] | "all",
						assignee: values.service,
						date: values.date,
					}))
				}
				onExport={() => exportAlertsCsv(filtered)}
			/>

			<AlertsTable rows={filtered} />
		</div>
	);
}
