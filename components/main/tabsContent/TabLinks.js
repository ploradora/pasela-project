import { useContext } from "react";
import TabContext from "../../tab-context";

const TabLinks = () => {
  const ctx = useContext(TabContext);

  const buttons = [
    { id: 1, title: "Music", val: ctx.musicTab },
    { id: 2, title: "Stories", val: ctx.storiesTab },
    { id: 3, title: "Playlist", val: ctx.playlistsTab },
    { id: 4, title: "New Releases", val: ctx.releasesTab },
  ];

  return (
    <div>
      <div className="w-fit flex items-center justify-between">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => ctx.setCurrentTab(btn.val)}
            className={`overflow-hidden relative text-center text-l text-grey font-bold py-4 px-12 rounded-t-lg hover:text-dark after:absolute after:bg-white after:h-full after:w-full after:top-0 after:left-0 after:-z-10 after:translate-y-full after:transition-all hover:after:transition-all ${
              btn.val === ctx.currentTab ? "after:translate-y-0 text-darker" : ""
            }`}
          >
            {btn.title}
          </button>
        ))}
      </div>
    </div>
  );
};
export default TabLinks;