import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import { useMemo, useState } from "react";
import { SORT_OPTION_LABELS, type SortOption } from "../types/job";

interface SortMenuProps {
  selectedSort: SortOption;
  onSelectSort: (value: SortOption) => void;
}

const SORT_OPTIONS: SortOption[] = [
  "manual",
  "newest",
  "oldest",
  "last_opened",
  "az",
  "za",
];

export function SortMenu({ selectedSort, onSelectSort }: SortMenuProps) {
  const [open, setOpen] = useState(false);

  const labelList = useMemo(
    () => SORT_OPTIONS.map((option) => ({ value: option, label: SORT_OPTION_LABELS[option] })),
    []
  );

  return (
    <Menu open={open} onOpenChange={(_, data) => setOpen(data.open)}>
      <MenuTrigger disableButtonEnhancement>
        <Button className="toolbar-small-btn" appearance="outline" aria-label="Sort options">
          ...
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {labelList.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => {
                onSelectSort(option.value);
              }}
            >
              <span className={selectedSort === option.value ? "menu-item-selected" : ""}>
                {selectedSort === option.value ? "* " : ""}
                {option.label}
              </span>
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
