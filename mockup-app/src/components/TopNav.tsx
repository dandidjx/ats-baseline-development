import { Tab, TabList } from "@fluentui/react-components";
import { useState } from "react";

export function TopNav() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <header className="top-nav">
      <div className="brand-block">
        <div className="brand-mark" aria-hidden="true">cs</div>
        <span className="brand-name">CRM As A Service</span>
      </div>
      <TabList
        className="top-tabs"
        selectedValue={selectedTab}
        onTabSelect={(_, data) => setSelectedTab(String(data.value))}
      >
        <Tab value="activity">Activity</Tab>
        <Tab value="home">Home</Tab>
        <Tab value="about">About</Tab>
      </TabList>
    </header>
  );
}
