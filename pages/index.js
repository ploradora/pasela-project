import TabContext from "../components/TabContext";
import Nav from "../components/nav/Nav";
import SideLinks from "../components/SideLinks";
import MainContent from "../components/main/MainContent";
import { useState } from "react";
import { MOCK_CARD, MOCK_MUSIC } from "../components/main/MockData";
import { selectedContent } from "../components/main/MockData";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("music");
  const [currentListData, setCurrentListData] = useState(MOCK_MUSIC);
  const [filterQuery, setFilterQuery] = useState("");
  const [modalState, setModalState] = useState(false);
  const [selectContent, setSelectContent] = useState(selectedContent);
  
  const addNewPlaylist = (newPlaylist) => {
    const clonedSelectContent = [...selectContent];

    const secondClone = clonedSelectContent.map((content) => {
      if (content.val === "playlists") {
        content.mock.push(newPlaylist);
      }
      return content;
    });
    setSelectContent(secondClone);
  };

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
        selectContent,
        setSelectContent,
        addNewPlaylist,
        cardData: MOCK_CARD, 
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
