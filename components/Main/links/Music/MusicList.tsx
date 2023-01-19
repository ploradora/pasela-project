import TabContext from "../../../TabContext";
import React, { useContext } from "react";
import MusicItem from "./MusicItem";
import { MusicListProps } from "../../../Context/Interfaces";

const MusicList: React.FC<MusicListProps> = ({ list }) => {
  const ctx = useContext(TabContext);

  return (
    <>
      {list
        .filter((song) =>
          song.title.toLowerCase().includes(ctx.filterQuery.toLowerCase())
        )
        .map((song) => (
          <MusicItem song={song} key={song.id} />
        ))}
    </>
  );
};

export default MusicList;
