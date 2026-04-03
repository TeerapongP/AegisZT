export interface FilterValues {
  status: 'all' | 'success' | 'failure' | 'warning';
  severity: 'all' | 'low' | 'medium' | 'high' | 'critical';
  service: 'all' | 'web' | 'ssh' | 'database' | 'api';
  date: Date | null
}