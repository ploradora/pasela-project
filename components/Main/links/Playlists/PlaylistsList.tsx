import { useContext } from "react";
import { Context } from "../../../Context/Context";
import PlaylistItem from "./PlaylistItem";
import { PlaylistsProps } from "../../../Context/Interfaces";

const PlaylistList: React.FC<PlaylistsProps> = ({ list }) => {
  const { filterQuery } = useContext(Context);
  return (
    <>
      {list
        .filter((playlist) =>
          playlist.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .map((playlist) => (
          <PlaylistItem
            id={playlist.id}
            key={playlist.id}
            name={playlist.name}
            tracks={playlist.tracks}
          />
        ))}
    </>
  );
};

export default PlaylistList;
