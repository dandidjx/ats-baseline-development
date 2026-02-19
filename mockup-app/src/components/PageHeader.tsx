import { Avatar, Button, Input } from "@fluentui/react-components";
import {
  InfoRegular,
  MailRegular,
  NavigationRegular,
  SearchRegular,
  SettingsRegular,
} from "@fluentui/react-icons";

interface PageHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function PageHeader({ searchValue, onSearchChange }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="page-title-wrap">
        <Button
          className="icon-btn icon-btn-light"
          appearance="transparent"
          aria-label="Open navigation"
          icon={<NavigationRegular />}
        >
        </Button>
        <h1 className="page-title">Job Openings</h1>
      </div>

      <Input
        className="search-input"
        value={searchValue}
        onChange={(_, data) => onSearchChange(data.value)}
        placeholder="Search"
        contentAfter={<SearchRegular className="search-glyph" />}
      />

      <div className="header-actions">
        <Button
          className="icon-btn icon-btn-light"
          appearance="transparent"
          aria-label="Settings"
          icon={<SettingsRegular />}
        />
        <Button
          className="icon-btn icon-btn-light"
          appearance="transparent"
          aria-label="Info"
          icon={<InfoRegular />}
        />
        <Button
          className="icon-btn icon-btn-light"
          appearance="transparent"
          aria-label="Mail"
          icon={<MailRegular />}
        />
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
