import React from "react";
import CardItem from "./CardItem";

type CardsProps = {
  cards: {
    id: number;
    icon: any;
    title: string;
    val: string;
    color1: string;
    color2: string;
  }[];
};

const Cards = (props: CardsProps) => {
  return (
    <div className="ml-4">
      {props.cards.map((card) => (
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
