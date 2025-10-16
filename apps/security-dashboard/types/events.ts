import { EventSeverity } from "./eventSeverity";
import { EventStatus } from "./eventStatus";

export interface EventData {
  id: string;
  timestamp: string;
  ip: string;
  user: string;
  status: EventStatus;
  service: 'Web Application' | 'SSH' | 'Database' | 'API' | string;
  description: string;
  severity: EventSeverity;
  location?: string;
}
