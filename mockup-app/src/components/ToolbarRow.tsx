import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import {
  AddRegular,
  AppsListRegular,
  ArrowClockwiseRegular,
  BoardRegular,
  ChevronDownRegular,
  EditRegular,
  FilterRegular,
  ListRegular,
} from "@fluentui/react-icons";
import type { LifecycleFilter, SortOption, ViewMode } from "../types/job";
import { STAGE_LABELS } from "../types/job";
import { SortMenu } from "./SortMenu";

interface ToolbarRowProps {
  viewMode: ViewMode;
  onViewModeChange: (value: ViewMode) => void;
  totalVisible: number;
  totalAvailable: number;
  lifecycle: LifecycleFilter;
  onLifecycleChange: (value: LifecycleFilter) => void;
  organization: string;
  organizationOptions: string[];
  onOrganizationChange: (value: string) => void;
  sortOption: SortOption;
  onSortOptionChange: (value: SortOption) => void;
}

const LIFECYCLE_OPTIONS: Array<{ value: LifecycleFilter; label: string }> = [
  { value: "all", label: "All lifecycles" },
  { value: "draft", label: STAGE_LABELS.draft },
  { value: "submitted", label: STAGE_LABELS.submitted },
  { value: "approved", label: STAGE_LABELS.approved },
  { value: "in_progress", label: STAGE_LABELS.in_progress },
];

export function ToolbarRow({
  viewMode,
  onViewModeChange,
  totalVisible,
  totalAvailable,
  lifecycle,
  onLifecycleChange,
  organization,
  organizationOptions,
  onOrganizationChange,
  sortOption,
  onSortOptionChange,
}: ToolbarRowProps) {
  const countText =
    totalVisible === totalAvailable
      ? `${totalAvailable} job openings`
      : `${totalVisible} of ${totalAvailable} job openings`;

  const lifecycleLabel =
    LIFECYCLE_OPTIONS.find((item) => item.value === lifecycle)?.label ?? "Job Opening Lifecycle";

  const organizationLabel =
    organization === "all" ? "Filter by organization" : organization;

  return (
    <section className="toolbar-row">
      <div className="toolbar-left">
        <Button
          className="toolbar-icon-btn"
          appearance={viewMode === "board" ? "primary" : "outline"}
          onClick={() => onViewModeChange("board")}
          aria-label="Board view"
          icon={<BoardRegular />}
        />
        <Button
          className="toolbar-icon-btn"
          appearance={viewMode === "list" ? "primary" : "outline"}
          onClick={() => onViewModeChange("list")}
          aria-label="List view"
          icon={<ListRegular />}
        />
        <Button
          className="toolbar-primary-btn"
          appearance="primary"
          icon={<AddRegular />}
        >
          + Job Opening
        </Button>
        <Button
          className="toolbar-text-btn"
          appearance="subtle"
          icon={<ArrowClockwiseRegular />}
        >
          Refresh
        </Button>
      </div>

      <div className="toolbar-center">{countText}</div>

      <div className="toolbar-right">
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button
              className="toolbar-dropdown-btn"
              appearance="outline"
              icon={<AppsListRegular />}
              iconPosition="before"
            >
              {lifecycleLabel}
              <ChevronDownRegular className="dropdown-chevron" />
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              {LIFECYCLE_OPTIONS.map((option) => (
                <MenuItem key={option.value} onClick={() => onLifecycleChange(option.value)}>
                  <span className={lifecycle === option.value ? "menu-item-selected" : ""}>
                    {lifecycle === option.value ? "* " : ""}
                    {option.label}
                  </span>
                </MenuItem>
              ))}
            </MenuList>
          </MenuPopover>
        </Menu>

        <Button
          className="toolbar-small-btn"
          appearance="outline"
          aria-label="Edit"
          icon={<EditRegular />}
        />

        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button className="toolbar-dropdown-btn" appearance="outline">
              {organizationLabel}
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem key="all" onClick={() => onOrganizationChange("all")}>
                <span className={organization === "all" ? "menu-item-selected" : ""}>
                  {organization === "all" ? "* " : ""}
                  All organizations
                </span>
              </MenuItem>
              {organizationOptions
                .filter((item) => item !== "all")
                .map((item) => (
                  <MenuItem key={item} onClick={() => onOrganizationChange(item)}>
                    <span className={organization === item ? "menu-item-selected" : ""}>
                      {organization === item ? "* " : ""}
                      {item}
                    </span>
                  </MenuItem>
                ))}
            </MenuList>
          </MenuPopover>
        </Menu>

        <Button className="toolbar-small-btn" appearance="outline" aria-label="Filter">
          <FilterRegular />
        </Button>
        <SortMenu selectedSort={sortOption} onSelectSort={onSortOptionChange} />
      </div>
    </section>
  );
}
