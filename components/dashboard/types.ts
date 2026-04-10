export interface DashboardStat {
  label: string;
  value: string;
  note: string;
}

export interface DashboardSection {
  title: string;
  description: string;
  items: string[];
}

export interface DashboardPlaceholderPageData {
  title: string;
  description: string;
  eyebrow?: string;
  stats: DashboardStat[];
  sections: DashboardSection[];
}

export type DashboardPlaceholderPageKey =
  | "market-intelligence"
  | "studio"
  | "gallery"
  | "dashboards"
  | "dashboards-overview"
  | "dashboards-analytics"
  | "chat-history"
  | "chat-history-recent";
