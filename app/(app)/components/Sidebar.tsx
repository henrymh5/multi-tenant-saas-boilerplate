"use client";

import { useState } from "react";
import { Columns3Cog } from "lucide-react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarSetting, setSidebarSetting] = useState("collapsed");

  return (
    <>
      <div
        onMouseEnter={() => setSidebarOpen(!sidebarOpen)}
        onMouseLeave={() => setSidebarOpen(!sidebarOpen)}
        className={`${sidebarOpen && sidebarSetting === "collapsed" ? "w-50" : ""} ${sidebarSetting === "collapsed" ? "w-15" : "w-50"} Sidebar overflow-hidden flex justify-start items-end pb-5 pl-5 pr-5 transition-all border-r border-[#ffffff1a] bg-[#101010] self-stretch`}
      >
        <div
          onClick={() => setSettingsOpen(!settingsOpen)} className="SidebarLabel transition-all opacity-30 hover:opacity-100 flex gap-6 items-center justify-start cursor-pointer">
        <Columns3Cog
          size={20}
          color="currentColor"
          className="text-white hover:text-white shrink-0"
        />
        <p className="shrink-0 text-sm">Sidebar Settings</p>
        </div>
      </div>

      <div
        className={`SidebarSettings absolute ${settingsOpen ? "flex" : "hidden"} flex-col gap-5 border border-[#ffffff1a] bottom-10 left-20 h-fit w-fit p-5 bg-[#101010]`}
      >
        <div
          onClick={() => setSidebarSetting("collapsed")}
          className="SettingsOption"
        >
          Collapse
        </div>
        <div
          onClick={() => setSidebarSetting("expanded")}
          className="SettingsOption"
        >
          Always Expanded
        </div>
      </div>
    </>
  );
}