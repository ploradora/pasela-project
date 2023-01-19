import React from "react";
import { Playlist } from "../../../Context/Interfaces";

const PlaylistItem: React.FC<Playlist> = ({ name, tracks}) => {
  return (
    <div
      style={{
        background: "linear-gradient(200deg, #a7b5d9, #d8e4f0)",
      }}
      className="p-2.5  w-full rounded-lg hover:drop-shadow-md cursor-pointer"
    >
      <div className="w-full h-32 bg-white rounded-lg mb-2 bg-transparent"></div>
      <p className="text-dark font-bold -mb-1 ">{name}</p>
      <p className="text-sm text-dark">{tracks} tracks</p>
    </div>
  );
};

export default PlaylistItem;
