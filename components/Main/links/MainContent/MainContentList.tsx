import { useContext } from "react";
import { Context } from "../../../Context/Context";
import TabLinks from "../Tabs/Tabs";
import MainContentItem from "./MainContentItem";

const CurrentList: React.FC  = () => {
  const { currentTab } = useContext(Context);

  return (
    <div className="overflow-hidden">
      <div>
        <TabLinks />
      </div>
      <div
        className={`${
          currentTab === "music" ? "" : "rounded-tl-2xl delay-75 duration-700"
        } relative w-full pl-4 pb-4 pt-4 pr-2 bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl`}
      >
        <MainContentItem />
      </div>
    </div>
  );
};

export default CurrentList;
