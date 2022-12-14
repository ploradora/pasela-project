import { useState } from "react";

const TabLinks = (props) => {
  const [active, setActive] = useState("music");
  const [buttons, setButtons] = useState([
    { id: 1, title: "Music" },
    { id: 2, title: "Stories" },
    { id: 3, title: "Playlist" },
    { id: 4, title: "New Releases" },
  ]);
  return (
    <div className="flex items-center justify-between">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => console.log(btn.id)}
          className="z-10 overflow-hidden relative text-center text-l font-bold py-4 px-12 rounded-t-lg after:absolute after:bg-white  after:h-full after:w-full after:top-0 after:left-0 after:-z-10
          after:translate-y-full
          after:transition-all hover:after:translate-y-0 hover:after:transition-all"
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};
export default TabLinks;
