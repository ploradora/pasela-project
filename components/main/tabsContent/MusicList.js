import { faPlay, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MusicList = (props) => {
  const DUMMY_MUSIC = [
    { id: "1", title: "I'm The Best I Can Be" },
    { id: "2", title: "Thoughts-Actions-Feeling Song" },
    { id: "3", title: "Gifts & Gifts & Gifts" },
    { id: "4", title: "Emotions" },
    { id: "5", title: "I'm The Best I Can Be" },
    { id: "6", title: "Thoughts-Actions-Feeling Song" },
    { id: "7", title: "Gifts & Gifts & Gifts" },
    { id: "8", title: "Emotions" },
    { id: "9", title: "I'm The Best I Can Be" },
    { id: "10", title: "Thoughts-Actions-Feeling Song" },
    { id: "11", title: "Gifts & Gifts & Gifts" },
    { id: "12", title: "Emotions" },
    { id: "13", title: "I'm The Best I Can Be" },
    { id: "14", title: "Thoughts-Actions-Feeling Song" },
    { id: "15", title: "Gifts & Gifts & Gifts" },
    { id: "16", title: "Emotions" },
    { id: "17", title: "I'm The Best I Can Be" },
    { id: "18", title: "Thoughts-Actions-Feeling Song" },
    { id: "19", title: "Gifts & Gifts & Gifts" },
    { id: "20", title: "Emotions" },
    { id: "21", title: "Emotions" },
    { id: "22", title: "I'm The Best I Can Be" },
    { id: "23", title: "Thoughts-Actions-Feeling Song" },
    { id: "24", title: "Gifts & Gifts & Gifts" },
    { id: "25", title: "Emotions" },
    { id: "26", title: "I'm The Best I Can Be" },
    { id: "27", title: "Thoughts-Actions-Feeling Song" },
    { id: "28", title: "Gifts & Gifts & Gifts" },
    { id: "29", title: "Emotions" },
  ];
  return (
      <div>
        {DUMMY_MUSIC.map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between mb-2 text-dark"
          >
            <div className="flex items-center">
              <div className="grid place-items-center radius-lg w-14 h-14 rounded-lg bg-gradient-to-r from-silver to-skin mr-3 cursor-pointer hover:drop-shadow-md hover:brightness-110	transition-all">
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <p className="font-bold">{song.title}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>3:33</p>
              <p>Positive Action</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>
        ))}
      </div>
  );
};

export default MusicList;
