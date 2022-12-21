import React from "react";

const OverflowScrollStyling = (props) => {
  return (
    <div
      className={`pr-3 scrollbar-thin scrollbar-thumb-dashboard-border scrollbar-thumb-rounded-full scrollbar-track-transparent overflow-y-scroll h-[calc(100vh-262px)] ${props.stylingOnMusicTab}`}
    >
      {props.children}
    </div>
  );
};
export default OverflowScrollStyling;
