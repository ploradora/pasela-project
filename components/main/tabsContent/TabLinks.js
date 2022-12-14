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
          className="z-10 overflow-hidden relative text-center text-l font-bold py-4 px-12 rounded-t-lg transition duration-500 ease-out hover:ease-in after:absolute after:w-full after:h-full after:bg-white after:left-0 after:-bottom-16 after:rounded-t-lg after:-z-10 hover:after:bottom-0"
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default TabLinks;
