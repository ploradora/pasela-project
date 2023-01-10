import CardItem from "./CardItem";

const Cards = ({ cards }) => {
  return (
    <div className="ml-4">
      {cards.map((card) => (
        <CardItem
          key={card.id}
          icon={card.icon}
          title={card.title}
          val={card.val}
          color1={card.color1}
          color2={card.color2}
        />
      ))}
    </div>
  );
};

export default Cards;
