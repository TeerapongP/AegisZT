import { Tag } from "primereact/tag";
import type { Alert } from "@/types/alert";

export default function AlertStatusBadge({ status }: { status: Alert["status"] }) {
	const severity =
		status === "Open"
			? "danger"
			: status === "In Progress"
			? "warning"
			: status === "Resolved"
			? "success"
			: "info";

	return <Tag value={status} severity={severity} rounded />;
}
