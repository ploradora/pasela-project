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
        } relative h-[calc(100vh-236px)] w-full p-4 bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-y-scroll`}
      >
        {selectedTab === "music" && <MusicList />}
        {selectedTab === "releases" && <NewReleases />}
        {selectedTab === "playlists" && <Playlists />}
        {selectedTab === "stories" && <StoriesList />}
      </div>
    </div>
  );
};

export default CurrentList;
