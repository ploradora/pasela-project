import OverflowScrollStyling from "../../OverflowScrollStyling";
import PlaylistList from "./PlaylistsList";

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
