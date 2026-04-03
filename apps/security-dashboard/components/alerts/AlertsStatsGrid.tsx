import { BellRing, ShieldAlert, Sparkles, UserCheck } from "lucide-react";
import type { AlertSummary } from "./types";

function AlertsStatCard({
	title,
	value,
	icon,
	tone,
}: {
	title: string;
	value: number;
	icon: React.ReactNode;
	tone: string;
}) {
	return (
		<div className="tw-rounded-xl tw-border tw-border-slate-200 tw-bg-white tw-p-4 tw-shadow-sm">
			<div className="tw-flex tw-items-center tw-justify-between">
				<p className="tw-text-sm tw-font-medium tw-text-slate-600">{title}</p>
				<span
					className={`tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-lg tw-bg-gradient-to-br tw-text-white ${tone}`}
				>
					{icon}
				</span>
			</div>
			<p className="tw-mt-2 tw-text-2xl tw-font-bold tw-text-slate-900">{value}</p>
		</div>
	);
}

export default function AlertsStatsGrid({ summary }: { summary: AlertSummary }) {
	return (
		<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-4">
			<AlertsStatCard
				title="Critical"
				value={summary.critical}
				icon={<ShieldAlert className="tw-h-5 tw-w-5" />}
				tone="tw-from-rose-500 tw-to-red-500"
			/>
			<AlertsStatCard
				title="Open"
				value={summary.open}
				icon={<BellRing className="tw-h-5 tw-w-5" />}
				tone="tw-from-amber-500 tw-to-orange-500"
			/>
			<AlertsStatCard
				title="In Progress"
				value={summary.inProgress}
				icon={<Sparkles className="tw-h-5 tw-w-5" />}
				tone="tw-from-sky-500 tw-to-cyan-500"
			/>
			<AlertsStatCard
				title="Assigned"
				value={summary.assigned}
				icon={<UserCheck className="tw-h-5 tw-w-5" />}
				tone="tw-from-emerald-500 tw-to-teal-500"
			/>
		</div>
	);
}
