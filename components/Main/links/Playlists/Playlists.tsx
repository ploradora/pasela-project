import React from "react";
import OverflowScrollStyling from "../../OverflowScrollStyling";
import PlaylistList from "./PlaylistsList";
import { PlaylistsProps } from "../../../Context/Interfaces";

const Playlist: React.FC<PlaylistsProps> = ({ list }) => {
  return (
    <OverflowScrollStyling>
      <div className="grid grid-card gap-2 w-full h-full">
        <PlaylistList list={list} />
      </div>
    </OverflowScrollStyling>
  );
};

export default Playlist;
