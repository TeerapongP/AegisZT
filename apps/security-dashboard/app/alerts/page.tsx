import AlertsContainer from "@/components/alerts/AlertsContainer";
import { mockAlerts } from "@/mock/alerts";

export default function AlertsPage() {
	return <AlertsContainer rows={mockAlerts} />;
}
