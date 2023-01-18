import Cards from "./Cards/Cards";
import CurrentList from "./links/MainContent/MainContentList";
import { useContext } from "react";
import { TabContextType } from "../Context/TabContext";
import { MockCard } from "../Context/ContextTypes.types";


const MainContent = () => {
  const ctx = useContext(TabContext);

  return (
    <div className="flex items-start justify-between w-11/12 m-auto mt-14 w-full h-[calc(100vh-180px)]">
      <div className="w-full">
        <CurrentList />
      </div>
      <Cards cards={ctx.cardData} />
    </div>
  );
};

export default MainContent;
