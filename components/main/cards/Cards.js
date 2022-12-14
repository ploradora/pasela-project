import {
  faMusic,
  faRecordVinyl,
  faIcons,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Cards = () => {
  const [cardData, setCardData] = useState([
    {
      id: 4,
      icon: faMusic,
      title: "New Releases",
      color1: "#F8BA0C",
      color2: "#EF9D88",
    },
    {
      id: 3,
      icon: faIcons,
      title: "Playlists",
      color1: "#6576A0",
      color2: "#9AB9D6",
    },
    {
      id: 1,
      icon: faRecordVinyl,
      title: "Music",
      color1: "#4BDFFF",
      color2: "#32C9A5",
    },
    {
      id: 2,
      icon: faRadio,
      title: "Stories",
      color1: "#DC79FF",
      color2: "#EF9D88",
    },
  ]);
  const [selectCard, setSelectCard] = useState(null);
  useEffect(() => {
    console.log(selectCard);
  });
  return (
    <div className="ml-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          style={{
            background: `linear-gradient(200deg, ${card.color1}, ${card.color2})`,
          }}
          className={`flex flex-col justify-between items-start w-72 h-32 mb-4 rounded-lg p-2.5 cursor-pointer`}
          onClick={() => setSelectCard(card.id)}
        >
          <FontAwesomeIcon icon={card.icon} className="text-2xl text-dark-grey" />
          <div>
            <div className="text-l font-bold">{card.title}</div>
            <p className="text-sm text-dark-grey">23 Tracks</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
