import EventsContainer from "@/components/events/EventsContainer";
import { mockEvents } from "@/mock/events";

export default function EventsPage() {
  return <EventsContainer rows={mockEvents} />;
}
