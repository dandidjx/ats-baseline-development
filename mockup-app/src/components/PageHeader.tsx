import { Avatar, Button, Input } from "@fluentui/react-components";

interface PageHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function PageHeader({ searchValue, onSearchChange }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="page-title-wrap">
        <Button
          className="icon-btn"
          appearance="transparent"
          aria-label="Open navigation"
        >
          =
        </Button>
        <h1 className="page-title">Job Openings</h1>
      </div>

      <Input
        className="search-input"
        value={searchValue}
        onChange={(_, data) => onSearchChange(data.value)}
        placeholder="Search"
        contentAfter={<span className="glyph">Q</span>}
      />

      <div className="header-actions">
        <Button className="icon-btn" appearance="transparent" aria-label="Settings">
          S
        </Button>
        <Button className="icon-btn" appearance="transparent" aria-label="Info">
          I
        </Button>
        <Button className="icon-btn" appearance="transparent" aria-label="Mail">
          M
        </Button>
        <Avatar
          name="Maria Bennett"
          initials="MB"
          size={36}
          color="colorful"
          aria-label="Account"
        />
      </div>
    </section>
  );
}
