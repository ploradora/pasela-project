import React from "react";
import { OverflowScrollStylingTypes } from "../Context/Interfaces";

const OverflowScrollStyling: React.FC<OverflowScrollStylingTypes> = ({
  stylingOnMusicTab,
  children,
}) => {
  return (
    <div
      className={`pr-3 scrollbar-thin scrollbar-thumb-dashboard-border scrollbar-thumb-rounded-full scrollbar-track-transparent overflow-y-scroll max-h-[calc(100vh_-_262px)] min-h-[calc(100vh_-_262px)] ${stylingOnMusicTab}`}
    >
      {children}
    </div>
  );
};
export default OverflowScrollStyling;
