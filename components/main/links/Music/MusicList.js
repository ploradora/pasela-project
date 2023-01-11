import { faPlay, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabContext from "../../../TabContext";
import { useContext } from "react";

const MusicList = ({list}) => {
  const ctx = useContext(TabContext);

  return (
    <>
      {list
        .filter((song) =>
          song.title.toLowerCase().includes(ctx.filterQuery.toLowerCase())
        )
        .map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between mb-2 text-dark last:mb-0"
          >
            <a href={song.link} target="_blank" className="flex items-center">
              <div
                style={{ color: "#fff" }}
                className="relative grid place-items-center radius-lg w-14 h-14 rounded-lg bg-gradient-to-r from-silver to-skin mr-3 cursor-pointer hover:drop-shadow-md hover:brightness-110 transition-all after:absolute after:h-8 after:w-8 after:bg-grey-400 after:z-10 after:rounded-full"
              >
                <FontAwesomeIcon icon={faPlay} className="z-20 text-xs" />
              </div>
              <p className="font-bold">{song.title}</p>
            </a>
            <div className="flex items-center justify-between w-48 text-grey-200 text-sm font-bold">
              <p>{song.time}</p>
              <div className="flex items-center">
                <p className="mr-4">{song.artist}</p>
                <FontAwesomeIcon
                  className="text-grey-300 text-xl px-2 cursor-pointer"
                  icon={faEllipsisVertical}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default MusicList;