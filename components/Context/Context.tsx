import { createContext, useState } from "react";
import { MOCK_MUSIC, MOCK_CARD, selectedContent } from "../Main/MockData";
import { Playlist, StateTypes } from "./Interfaces";

export const Context = createContext<StateTypes>({
  currentTab: "music",
  currentListData: MOCK_MUSIC,
  filterQuery: "",
  modalState: false,
  selectContent: selectedContent,
  setCurrentTab: () => {},
  setCurrentListData: () => {},
  setFilterQuery: () => {},
  setModalState: () => {},
  setSelectContent: () => {},
  addNewPlaylist: () => {},
  cardData: MOCK_CARD,
});

type ChildrenContextProvider = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<ChildrenContextProvider> = ({
  children,
}) => {
  const [currentTab, setCurrentTab] = useState("music");
  const [currentListData, setCurrentListData] = useState(MOCK_MUSIC);
  const [filterQuery, setFilterQuery] = useState("");
  const [modalState, setModalState] = useState(false);
  const [selectContent, setSelectContent] = useState(selectedContent);

  const addNewPlaylist = (newPlaylist: Playlist) => {
    const clonedSelectContent = [...selectContent];

    const secondClone = clonedSelectContent.map((content) => {
      if (content.val === "playlists") {
        content.mock.push(newPlaylist as any);
      }
      return content;
    });
    setSelectContent(secondClone);
  };

  return (
    <Context.Provider
      value={{
        currentTab,
        currentListData,
        filterQuery,
        modalState,
        selectContent,
        setCurrentTab,
        setCurrentListData,
        setFilterQuery,
        setModalState,
        setSelectContent,
        addNewPlaylist,
        cardData: MOCK_CARD,
      }}
    >
      {children}
    </Context.Provider>
  );
};
