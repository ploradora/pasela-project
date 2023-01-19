import React, { useContext } from "react";
import MusicItem from "./MusicItem";
import { MusicListProps } from "../../../Context/Interfaces";
import { Context } from "../../../Context/Context";

const MusicList: React.FC<MusicListProps> = ({ list }) => {
  const { filterQuery } = useContext(Context);

  return (
    <>
      {list
        .filter((song: {}) =>
          song.title.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .map((song) => (
          <MusicItem song={song} key={song.id} />
        ))}
    </>
  );
};

export default MusicList;
