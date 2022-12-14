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
      id: 1,
      icon: faMusic,
      title: "New Releases",
      color: "white",
    },
    {
      id: 2,
      icon: faIcons,
      title: "Playlists",
      color: "dashboard-btn",
    },
    {
      id: 3,
      icon: faRecordVinyl,
      title: "Music",
      color: "main",
    },
    {
      id: 4,
      icon: faRadio,
      title: "Stories",
      color: "grey",
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
          className={`flex flex-col justify-between items-start w-72 h-32 bg-${card.color} bg-white mb-4 rounded-lg p-2.5 cursor-pointer`}
          onClick={() => setSelectCard(card.id)}
        >
          <FontAwesomeIcon icon={card.icon} className="text-2xl"/>
          <div>
            <div className="text-l font-bold">{card.title}</div>
            <p className="text-sm">23 Tracks</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
