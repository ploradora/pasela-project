import TabContext from "../../../TabContext";
import { useContext } from "react";
import MusicItem from "./MusicItem";

const MusicList = ({ list }) => {
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
