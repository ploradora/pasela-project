import { useContext } from "react";
import PlaylistItem from "./PlaylistItem";
import { PlaylistsProps } from "../../../Context/Interfaces";
import { Context } from "../../../Context/Context";

const PlaylistList: React.FC<PlaylistsProps> = ({ list }) => {
  const { filterQuery } = useContext(Context);
  return (
    <>
      {list
        .filter((playlist) =>
          playlist.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .map((playlist) => (
          <PlaylistItem key={playlist.id} list={playlist} />
        ))}
    </>
  );
};

export default PlaylistList;
