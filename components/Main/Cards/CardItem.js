import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardItem = ({id, icon, title, val, color1, color2}) => {
  return (
    <div
      key={id}
      style={{
        background: `linear-gradient(200deg, ${color1}, ${color2})`,
      }}
      className={`flex flex-col justify-between items-start w-72 h-32 mb-4 rounded-lg p-2.5 cursor-pointer`}
      onClick={() => {
        console.log(val);
      }}
    >
      <FontAwesomeIcon icon={icon} className="text-2xl text-dark" />
      <div>
        <div className="text-l font-bold">{title}</div>
        <p className="text-sm text-dark">23 Tracks</p>
      </div>
    </div>
  );
};

export default CardItem;
