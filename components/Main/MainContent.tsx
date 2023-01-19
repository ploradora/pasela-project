import Cards from "./Cards/Cards";
import CurrentList from "./links/MainContent/MainContentList";
import { useContext } from "react";
import { Context } from "../Context/Context";

const MainContent: React.FC = () => {
  const {cardData} = useContext(Context)

  return (
    <div className="flex items-start justify-between w-11/12 m-auto mt-14 w-full h-[calc(100vh-180px)]">
      <div className="w-full">
        <CurrentList />
      </div>
      <Cards cards={cardData} />
    </div>
  );
};

export default MainContent;
