import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MOCK_CARD } from "../MockData";

const Cards = () => {

  return (
    <div className="ml-4">
      {MOCK_CARD.map((card) => (
        <div
          key={card.id}
          style={{
            background: `linear-gradient(200deg, ${card.color1}, ${card.color2})`,
          }}
          className={`flex flex-col justify-between items-start w-72 h-32 mb-4 rounded-lg p-2.5 cursor-pointer`}
          onClick={() => {
            console.log(card.val);
          }}
        >
          <FontAwesomeIcon icon={card.icon} className="text-2xl text-dark" />
          <div>
            <div className="text-l font-bold">{card.title}</div>
            <p className="text-sm text-dark">23 Tracks</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
