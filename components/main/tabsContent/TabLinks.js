import { useEffect, useState, useContext } from "react";
import CardContext from "../../CardContext";

const TabLinks = (props) => {
  const [selectTab, setSelectTab] = useState("music");
  const ctx = useContext(CardContext);

  const buttons = [
    { id: 1, title: "Music", val: "music" },
    { id: 2, title: "Stories", val: "stories" },
    { id: 3, title: "Playlist", val: "playlists" },
    { id: 4, title: "New Releases", val: "releases" },
  ];

  useEffect(() => {
    ctx.setCurrentTab(selectTab);
  });

  return (
    <div>
      <div className="w-fit flex items-center justify-between">
        {buttons.map((btn) => (
          <button key={btn.id}
            onClick={() => setSelectTab(btn.val)}
            className={`overflow-hidden relative text-center text-l text-grey font-bold py-4 px-12 rounded-t-lg hover:text-dark after:absolute after:bg-white after:h-full after:w-full after:top-0 after:left-0 after:-z-10 after:translate-y-full after:transition-all hover:after:transition-all ${btn.val === selectTab ? "after:translate-y-0 text-darker" : ""}`}>
            {btn.title}
          </button>
        ))}
      </div>
    </div>
  );
};
export default TabLinks;
