import { useEffect, useState } from "react";

const TabLinks = (props) => {
  const [active, setActive] = useState(1);
  const [buttons, setButtons] = useState([
    { id: 1, title: "Music" },
    { id: 2, title: "Stories" },
    { id: 3, title: "Playlist" },
    { id: 4, title: "New Releases" },
  ]);
  useEffect(() => console.log(active));
  return (
    <div className="flex items-center justify-between">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setActive(btn.id)}
          className={`z-10 overflow-hidden relative text-center text-l text-grey font-bold py-4 px-12 rounded-t-lg hover:text-dark-grey after:absolute after:bg-white after:h-full after:w-full after:top-0 after:left-0 after:-z-10
          after:translate-y-full
          after:transition-all hover:after:transition-all ${
            btn.id === active ? "after:translate-y-0 text-dark" : ""
          }`}
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};
export default TabLinks;
