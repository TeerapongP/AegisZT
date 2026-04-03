import { BellRing } from "lucide-react";
import { Tag } from "primereact/tag";

export default function AlertsHeader({ total }: { total: number }) {
	return (
		<div className="tw-mb-5 tw-rounded-2xl tw-border tw-border-sky-100 tw-bg-gradient-to-r tw-from-white tw-to-sky-50 tw-p-5 sm:tw-p-6">
			<div className="tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
				<div className="tw-flex tw-items-start tw-gap-3">
					<div className="tw-grid tw-h-11 tw-w-11 tw-place-items-center tw-rounded-xl tw-bg-gradient-to-br tw-from-sky-500 tw-to-cyan-500 tw-text-white tw-shadow-md">
						<BellRing className="tw-h-5 tw-w-5" />
					</div>
					<div>
						<h1 className="tw-text-2xl tw-font-bold tw-text-slate-900">Alerts Center</h1>
						<p className="tw-text-sm tw-text-slate-600">
							Track, triage, and close threats with a single operational view.
						</p>
					</div>
				</div>

				<Tag
					value={`${total} active records`}
					severity="info"
					icon="pi pi-database"
					className="tw-self-start sm:tw-self-auto"
				/>
			</div>
		</div>
	);
}
