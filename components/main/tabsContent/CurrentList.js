import TabLinks from "./TabLinks";
import CardContext from "../../CardContext";
import { useContext, useEffect, useState } from "react";
import MusicList from "./MusicList";
import NewReleases from "./NewReleases";
import Playlists from "./Playlists";
import StoriesList from "./StoriesList";

const CurrentList = (props) => {
  const ctx = useContext(CardContext);
  const [selectedTab, setSelectedTab] = useState("music");

  useEffect(() => {
    console.log(ctx.currentTab, "from");
    setSelectedTab(ctx.currentTab);
  });

  return (
    <div>
      <div className="">
        <TabLinks />
      </div>
      <div
        className={`${
          ctx.currentTab === "music"
            ? ""
            : "rounded-tl-2xl delay-75 duration-700"
        } relative w-full pl-4 pb-4 pt-4 bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl`}
      >
        {ctx.currentTab === "music" && (
          <div>
            <div className="flex items-center justify-between w-[calc(100%-16px)] h-10 px-6  bg-main rounded-lg text-sm">
              <div className="flex items-center">
                <span className="mr-8">#</span>
                <p>Track Title</p>
              </div>
              <div className="flex items-center">
                <p className="mr-24">Time</p>
                <p>Artist</p>
              </div>
            </div>
            <div className="h-2 w-full"></div>
          </div>
        )}
        <div className={`${ctx.currentTab === "music" ? 'overflow-y-scroll h-[calc(100vh-310px)]' : 'h-[calc(100vh-246px)]'}`}>
          {selectedTab === "music" && <MusicList />}
          {selectedTab === "releases" && <NewReleases />}
          {selectedTab === "playlists" && <Playlists />}
          {selectedTab === "stories" && <StoriesList />}
        </div>
      </div>
    </div>
  );
};

export default CurrentList;
