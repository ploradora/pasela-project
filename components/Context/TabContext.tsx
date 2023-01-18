import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import {
  MOCK_CARD,
  MOCK_MUSIC,
  MOCK_PLAYLIST,
  selectedContent,
} from "../Main/MockData";

const TabContext = createContext<TabContextType>({
  MOCK_CARD,
  MOCK_MUSIC,
  MOCK_PLAYLIST,
  selectedContent,
});

export type TabContextType = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  currentListData: {
    id: string;
    title: string;
    time: string;
    artist: string;
    link: string;
  }[];

  setCurrentListData: Dispatch<
    SetStateAction<
      {
        id: string;
        title: string;
        time: string;
        artist: string;
        link: string;
      }[]
    >
  >;
  filterQuery: string;
  setFilterQuery: Dispatch<SetStateAction<string>>;
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
  addNewPlaylist: (newPlaylist: any) => void;
};

type TabContextProviderProps = {
  children: React.ReactNode;
};

export const TabContextProvider = ({ children }: TabContextProviderProps) => {
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
        cardData,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

// // type TabContextProvider = {
// //   currentTab: string;
// //   setCurrentTab: Dispatch<SetStateAction<string>>;
// //   currentListData: null;
// //   setCurrentListData: Dispatch<
// //     SetStateAction<
// //       {
// //         id: string;
// //         title: string;
// //         time: string;
// //         artist: string;
// //         link: string;
// //       }[]
// //     >
// //   >;
// //   filterQuery: "";
// //   setFilterQuery: Dispatch<SetStateAction<string>>;
// //   modalState: boolean;
// //   setModalState: Dispatch<SetStateAction<boolean>>;
// //   selectContent: (
// //     | {
// //         id: number;
// //         title: string;
// //         val: string;
// //         component: ({ list }: { list: any }) => JSX.Element;
// //         mock: {
// //           id: string;
// //           title: string;
// //           time: string;
// //           artist: string;
// //           link: string;
// //         }[];
// //       }
// //     | {
// //         id: number;
// //         title: string;
// //         val: string;
// //         component: () => JSX.Element;
// //         mock?: undefined;
// //       }
// //     | {}
// //   )[];
// //   setSelectContent: Dispatch<
// //     SetStateAction<
// //       (
// //         | {
// //             id: number;
// //             title: string;
// //             val: string;
// //             component: ({ list }: { list: any }) => JSX.Element;
// //             mock: {
// //               id: string;
// //               title: string;
// //               time: string;
// //               artist: string;
// //               link: string;
// //             }[];
// //           }
// //         | {
// //             id: number;
// //             title: string;
// //             val: string;
// //             component: () => JSX.Element;
// //             mock?: undefined;
// //           }
// //         | {}
// //       )[]
// //     >
// //   >;
// //   addNewPlaylist: (newPlaylist: any) => void;
// //   cardData: (MOCK_CARD: any) => void;
// // };
// type TabContextType = {
//   modalState: boolean;
//   setModalState: Dispatch<SetStateAction<boolean>>;
// };
// export const TabContext = createContext({
//   //   currentTab: "",
//   //   setCurrentTab: () => {},
//   //   currentListData: null,
//   //   setCurrentListData: () => {},
//   //   filterQuery: "",
//   //   setFilterQuery: () => {},
//   modalState: false,
//   setModalState: () => {},
//   //   selectContent,
//   //   setSelectContent,
//   //   addNewPlaylist,
//   //   cardData: MOCK_CARD,
// });

// export const TabProvider = ({ children }: TabContextProviderProps) => {
//   //

//   return (
//     <TabContext.Provider
//       value={{
//         // currentTab,
//         // setCurrentTab,
//         // currentListData,
//         // setCurrentListData,
//         // filterQuery,
//         // setFilterQuery,
//         modalState,
//         setModalState,
//         // selectContent,
//         // setSelectContent,
//         // addNewPlaylist,
//         // cardData,
//       }}
//     >
//       {children}
//     </TabContext.Provider>
//   );
// };
