import TabContext from "../components/TabContext";
import Nav from "../components/nav/Nav";
import SideLinks from "../components/SideLinks";
import MainContent from "../components/main/MainContent";
import { useState } from "react";
import { MOCK_MUSIC } from "../components/main/mock-data";
import MusicList from "../components/main/tabsContent/MusicList";
import StoriesList from "../components/main/tabsContent/StoriesList";
import Playlists from "../components/main/tabsContent/Playlists";
import NewReleases from "../components/main/tabsContent/NewReleases";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("music");
  const [currentListData, setCurrentListData] = useState(MOCK_MUSIC);
  const [filterQuery, setFilterQuery] = useState("");
  const [modalState, setModalState] = useState(false);
  const musicComponent = <MusicList />;
  const storiesComponent = <StoriesList />;
  const playlistsComponent = <Playlists />;
  const releasesComponent = <NewReleases />;

  return (
    <TabContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        currentListData,
        setCurrentListData,
        filterQuery,
        setFilterQuery,
        modalState,
        setModalState,
        musicTab: "music",
        storiesTab: "stories",
        playlistsTab: "playlists",
        releasesTab: "releases",
        musicComponent,
        storiesComponent,
        releasesComponent,
        playlistsComponent,
      }}
    >
      <section className="flex items-start">
        <SideLinks />
        <div className="w-full">
          <div>
            <Nav />
          </div>
          <MainContent />
        </div>
      </section>
    </TabContext.Provider>
  );
}
