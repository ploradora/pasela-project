import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardItemProps = {
  icon: any;
  title: string;
  val: string;
  color1: string;
  color2: string;
};

const CardItem = (props: CardItemProps) => {
  return (
    <div
      style={{
        background: `linear-gradient(200deg, ${props.color1}, ${props.color2})`,
      }}
      className={`flex flex-col justify-between items-start w-72 h-32 mb-4 rounded-lg p-2.5 cursor-pointer`}
      onClick={() => {
        console.log(props.val);
      }}
    >
      <FontAwesomeIcon icon={props.icon} className="text-2xl text-dark" />
      <div>
        <div className="text-l font-bold">{props.title}</div>
        <p className="text-sm text-dark">23 Tracks</p>
      </div>
    </div>
  );
};

export default CardItem;
