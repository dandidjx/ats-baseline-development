import { useMemo, useState } from "react";
import { MOCK_JOB_OPENINGS } from "./data/mockJobOpenings";
import { AppShell } from "./components/AppShell";
import { TopNav } from "./components/TopNav";
import { PageHeader } from "./components/PageHeader";
import { ToolbarRow } from "./components/ToolbarRow";
import { BoardView } from "./components/BoardView";
import { ListView } from "./components/ListView";
import type {
  JobOpening,
  LifecycleFilter,
  SortOption,
  ViewMode,
} from "./types/job";

function matchesSearch(job: JobOpening, query: string) {
  if (!query) {
    return true;
  }

  const safeQuery = query.toLowerCase();
  return (
    job.title.toLowerCase().includes(safeQuery) ||
    job.organization.toLowerCase().includes(safeQuery) ||
    job.owner.toLowerCase().includes(safeQuery)
  );
}

function sortJobs(jobs: JobOpening[], option: SortOption) {
  const output = [...jobs];

  switch (option) {
    case "manual":
      output.sort((a, b) => a.manualOrder - b.manualOrder);
      break;
    case "newest":
      output.sort(
        (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
      );
      break;
    case "oldest":
      output.sort(
        (a, b) => new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime()
      );
      break;
    case "last_opened":
      output.sort(
        (a, b) =>
          new Date(b.lastOpenedAt).getTime() - new Date(a.lastOpenedAt).getTime()
      );
      break;
    case "az":
      output.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "za":
      output.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return output;
}

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("board");
  const [sortOption, setSortOption] = useState<SortOption>("manual");
  const [organizationFilter, setOrganizationFilter] = useState<string>("all");
  const [lifecycleFilter, setLifecycleFilter] = useState<LifecycleFilter>("all");

  const organizations = useMemo(
    () => ["all", ...new Set(MOCK_JOB_OPENINGS.map((job) => job.organization))],
    []
  );

  const visibleJobs = useMemo(() => {
    const filtered = MOCK_JOB_OPENINGS.filter((job) => {
      const passesSearch = matchesSearch(job, searchValue.trim());
      const passesOrganization =
        organizationFilter === "all" || job.organization === organizationFilter;
      const passesLifecycle =
        lifecycleFilter === "all" || job.stage === lifecycleFilter;

      return passesSearch && passesOrganization && passesLifecycle;
    });

    return sortJobs(filtered, sortOption);
  }, [lifecycleFilter, organizationFilter, searchValue, sortOption]);

  return (
    <AppShell>
      <TopNav />
      <PageHeader searchValue={searchValue} onSearchChange={setSearchValue} />
      <ToolbarRow
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalVisible={visibleJobs.length}
        totalAvailable={MOCK_JOB_OPENINGS.length}
        lifecycle={lifecycleFilter}
        onLifecycleChange={setLifecycleFilter}
        organization={organizationFilter}
        organizationOptions={organizations}
        onOrganizationChange={setOrganizationFilter}
        sortOption={sortOption}
        onSortOptionChange={setSortOption}
      />
      {viewMode === "board" ? (
        <BoardView jobs={visibleJobs} />
      ) : (
        <ListView jobs={visibleJobs} />
      )}
    </AppShell>
  );
}
