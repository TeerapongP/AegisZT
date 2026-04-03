import type { Alert } from "@/types/alert";

export type AlertFilter = {
	severity: "all" | Alert["severity"];
	status: "all" | Alert["status"];
	assignee: "all" | string;
	query: string;
	date: Date | null;
};

export type AlertSummary = {
	critical: number;
	open: number;
	inProgress: number;
	assigned: number;
};
