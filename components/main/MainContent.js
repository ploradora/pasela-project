import Cards from "./cards/Cards";
import ContentList from "./tabsContent/ContentList";

const MainContent = (prop) => {
  return (
    <div className="flex items-start justify-between w-11/12 m-auto mt-14 bg-blue-test h-full w-full">
      <ContentList />
      <Cards />
    </div>
  );
};

export default MainContent;
