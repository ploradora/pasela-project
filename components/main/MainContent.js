import Cards from "./Cards/Cards";
import CurrentList from "./TabsContent/CurrentList";
import { useContext } from "react";
import TabContext from "../TabContext";

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
