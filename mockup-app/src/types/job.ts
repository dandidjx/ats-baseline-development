export type StageColumn = "draft" | "submitted" | "approved" | "in_progress";

export type ViewMode = "board" | "list";

export type SortOption =
  | "manual"
  | "newest"
  | "oldest"
  | "last_opened"
  | "az"
  | "za";

export type LifecycleFilter = "all" | StageColumn;

export interface JobMetric {
  id: string;
  label: string;
  value: number;
}

export interface JobOpening {
  id: string;
  title: string;
  organization: string;
  owner: string;
  stage: StageColumn;
  applicants: number;
  failed: number;
  passed: number;
  manualOrder: number;
  postedAt: string;
  lastOpenedAt: string;
  metrics: JobMetric[];
}

export const STAGE_LABELS: Record<StageColumn, string> = {
  draft: "Draft",
  submitted: "Submitted",
  approved: "Approved",
  in_progress: "In Progress",
};

export const SORT_OPTION_LABELS: Record<SortOption, string> = {
  manual: "Sort by manual order",
  newest: "Sort by newest",
  oldest: "Sort by oldest",
  last_opened: "Sort by last opened",
  az: "Sort by A to Z",
  za: "Sort by Z to A",
};
