import OverflowScrollStyling from "../../OverflowScrollStyling";
import MusicList from "./MusicList";
import React from "react";
import { MusicListProps } from "../../../Context/Interfaces";

const Music: React.FC<MusicListProps> = ({ list }) => {

  console.log(list);
  return (
    <div>
      <div className="pr-2">
        <div>
          <div className="flex items-center justify-between h-10 px-6 overflow-hidden bg-main rounded-lg text-sm">
            <div className="flex items-center">
              <span className="mr-8">#</span>
              <p>Track Title</p>
            </div>
            <div className="flex items-center">
              <p className="mr-24">Time</p>
              <p className="mr-8">Artist</p>
            </div>
          </div>
          <div className="h-2 w-full"></div>
        </div>
      </div>
      <OverflowScrollStyling
        stylingOnMusicTab={
          "max-h-[calc(100vh_-_310.1px)] min-h-[calc(100vh_-_310.1px)]"
        }
      >
        <div className="pr-3">
          <MusicList list={list} />
        </div>
      </OverflowScrollStyling>
    </div>
  );
};

export default Music;
