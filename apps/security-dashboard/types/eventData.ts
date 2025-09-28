export interface EventData {
  timestamp: string;
  ip: string;
  user: string;
  status: 'Success' | 'Failure';
  service: string;
}