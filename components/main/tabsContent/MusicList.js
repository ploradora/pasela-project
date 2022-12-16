import { faPlay, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MOCK_MUSIC } from "../MockData";

const MusicList = () => {
  return (
    <div className="pr-3">
      {MOCK_MUSIC.map((song) => (
        <div
          key={song.id}
          className="flex items-center justify-between mb-2 text-dark last:mb-0"
        >
          <div className="flex items-center">
            <div className="grid place-items-center radius-lg w-14 h-14 rounded-lg bg-gradient-to-r from-silver to-skin mr-3 cursor-pointer hover:drop-shadow-md hover:brightness-110	transition-all">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <p className="font-bold">{song.title}</p>
          </div>
          <div className="flex items-center justify-between w-40 text-grey-200 text-sm font-bold">
            <p className="mr-6">{song.time}</p>
            <div className="flex items-center">
              <p className="mr-4">{song.artist}</p>
              <FontAwesomeIcon
                className="text-grey-300 text-xl"
                icon={faEllipsisVertical}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
