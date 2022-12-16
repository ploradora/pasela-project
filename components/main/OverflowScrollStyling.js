import React from "react";
import TabContext from "../tab-context";
import { useContext } from "react";

const OverflowScrollStyling = (props) => {
  const ctx = useContext(TabContext);

  return (
    <div
      className={`pr-3 scrollbar-thin scrollbar-thumb-dashboard-border scrollbar-thumb-rounded-full scrollbar-track-transparent overflow-y-scroll ${
        ctx.currentTab === ctx.musicTab
          ? "max-h-[calc(100vh-310px)] min-h-[calc(100vh-310px)]"
          : "max-h-[calc(100vh-262px)] min-h-[calc(100vh-262px)]"
      }`}
    >
      {props.children}
    </div>
  );
};
export default OverflowScrollStyling;
