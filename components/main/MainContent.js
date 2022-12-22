import Cards from "./cards/Cards";
import CurrentList from "./tabsContent/CurrentList";
import { MOCK_CARD } from "./MockData";

const MainContent = (prop) => {
  return (
    <div className="flex items-start justify-between w-11/12 m-auto mt-14 w-full h-[calc(100vh-180px)]">
      <div className="w-full">
        <CurrentList />
      </div>
      <Cards cards={MOCK_CARD} />
    </div>
  );
};

export default MainContent;
