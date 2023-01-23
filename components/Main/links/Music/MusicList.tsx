import React, { useContext } from "react";
import { Context } from "../../../Context/Context";
import MusicItem from "./MusicItem";
import { MusicListProps } from "../../../Context/Interfaces";

const MusicList: React.FC<MusicListProps> = ({ list }) => {
  const { filterQuery } = useContext(Context);

  return (
    <>
      {list
        .filter((song) =>
          song.title.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .map((song) => (
          <MusicItem
            id={song.id}
            key={song.id}
            title={song.title}
            time={song.time}
            artist={song.artist}
            link={song.link}
          />
        ))}
    </>
  );
};

export default MusicList;
