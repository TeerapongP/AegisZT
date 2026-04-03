export interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  active?: boolean;
  path?: string;
}
