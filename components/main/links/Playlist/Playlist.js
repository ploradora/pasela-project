import OverflowScrollStyling from "../../OverflowScrollStyling";
import PlaylistList from "./PlaylistList";

const Playlist = ({ list }) => {
  return (
    <OverflowScrollStyling>
      <div className="grid grid-card gap-2 w-full h-full">
        <PlaylistList list={list} />
      </div>
    </OverflowScrollStyling>
  );
};

export default Playlist;
