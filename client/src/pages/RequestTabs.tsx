import { useState } from "react";
import type { TabContent } from "../types/Tabs_types";

export default function RequestTabs() {
  const [tabs, setTabs] = useState<TabContent[]>([
    {
      id: 1,
      title: "Tab 1",
      content: "This is Tab 1",
      isActive: true,
    },
  ]);
  const [activeTab, setActiveTab] = useState<number>(1);

  const addTab = () => {
    const newId: number = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    setTabs([
      ...tabs,
      {
        id: newId,
        title: `Tab ${newId}`,
        content: `This is Tab ${newId}`,
        isActive: false,
      },
    ]);
    setActiveTab(newId);
  };

  const removeTab = (id: number) => {
    const newTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(newTabs);
    if (activeTab === id) setActiveTab(newTabs[newTabs.length - 1]?.id || 1);
  };

  return (
    <div className="flex flex-col">
      <div style={{ borderBottom: "1px solid gray", padding: "4px" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{
              display: "inline-block",
              padding: "8px 12px",
              border: tab.isActive ? "2px solid black" : "1px solid gray",
              marginRight: "4px",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTab(tab.id);
              }}
              style={{ marginLeft: "8px", cursor: "pointer" }}
            >
              ×
            </button>
          </div>
        ))}
        <button onClick={addTab} style={{ marginLeft: "8px" }}>
          +
        </button>
      </div>
      <div style={{ padding: "16px" }}>
        {tabs.find((tab) => tab.id === activeTab)?.content || "No tabs open"}
      </div>
    </div>
  );
}
