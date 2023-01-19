import TabContext from "../../../TabContext";
import { useContext } from "react";
import PlaylistItem from "./PlaylistItem";
import { PlaylistsProps } from "../../../Context/Interfaces";

const PlaylistList: React.FC<PlaylistsProps> = ({ list }) => {
  const ctx = useContext(TabContext);

  return (
    <>
      {list
        .filter((playlist) =>
          playlist.name.toLowerCase().includes(ctx.filterQuery.toLowerCase())
        )
        .map((playlist) => (
          <PlaylistItem key={playlist.id} playlist={playlist} />
        ))}
    </>
  );
};

export default PlaylistList;
