import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Alert } from "@/types/alert";
import SeverityBadge from "../badges/SeverityBadge";
import AlertStatusBadge from "./AlertStatusBadge";
import { formatUtc } from "./alertsUtils";

export default function AlertsTable({ rows }: { rows: Alert[] }) {
	return (
		<Card className="tw-shadow-sm tw-border tw-border-slate-200">
			<DataTable
				value={rows}
				paginator
				rows={8}
				rowsPerPageOptions={[8, 16, 24]}
				responsiveLayout="scroll"
				dataKey="id"
				emptyMessage="No alerts matched your filters."
				header={
					<div className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-py-1">
						<h3 className="tw-text-lg tw-font-semibold tw-text-slate-900">Security Alerts</h3>
						<span className="tw-text-sm tw-text-slate-500">Showing {rows.length} records</span>
					</div>
				}
			>
				<Column field="id" header="Alert ID" sortable className="tw-font-mono" />
				<Column
					field="timestamp"
					header="Timestamp (UTC)"
					sortable
					body={(row: Alert) => <span>{formatUtc(row.timestamp)}</span>}
				/>
				<Column
					field="severity"
					header="Severity"
					body={(row: Alert) => <SeverityBadge severity={row.severity} />}
				/>
				<Column
					field="title"
					header="Title"
					sortable
					body={(row: Alert) => (
						<div>
							<p className="tw-font-medium tw-text-slate-900">{row.title}</p>
							<p className="tw-text-xs tw-text-slate-500">{row.source}</p>
						</div>
					)}
				/>
				<Column
					field="status"
					header="Status"
					body={(row: Alert) => <AlertStatusBadge status={row.status} />}
				/>
				<Column
					field="assignee"
					header="Assignee"
					body={(row: Alert) => (
						<span className="tw-text-sm tw-text-slate-700">{row.assignee ?? "Unassigned"}</span>
					)}
				/>
			</DataTable>
		</Card>
	);
}
