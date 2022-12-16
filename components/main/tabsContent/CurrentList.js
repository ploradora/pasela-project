import TabLinks from "./TabLinks";
import TabContext from "../../tab-context";
import { useContext } from "react";

const CurrentList = () => {
  const ctx = useContext(TabContext);

  return (
    <div className="overflow-hidden">
      <div>
        <TabLinks />
      </div>
      <div
        className={`${
          ctx.currentTab === ctx.musicTab
            ? ""
            : "rounded-tl-2xl delay-75 duration-700"
        } relative w-full pl-4 pb-4 pt-4 bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl`}
      >
        {ctx.currentTab === ctx.musicTab && (
          <div>
            <div className="flex items-center justify-between w-[calc(100%-16px)] h-10 px-6 overflow-hidden bg-main rounded-lg text-sm">
              <div className="flex items-center">
                <span className="mr-8">#</span>
                <p>Track Title</p>
              </div>
              <div className="flex items-center">
                <p className="mr-20">Time</p>
                <p className="mr-4">Artist</p>
              </div>
            </div>
            <div className="h-2 w-full"></div>
          </div>
        )}
        <div
          className={`${
            ctx.currentTab === ctx.musicTab
              ? "overflow-y-scroll max-h-[calc(100vh-310px)]"
              : "h-[calc(100vh-262px)]"
          }`}
        >
          {ctx.currentTab === ctx.musicTab && ctx.musicComponent}
          {ctx.currentTab === ctx.releasesTab && ctx.releasesComponent}
          {ctx.currentTab === ctx.playlistsTab && ctx.playlistsComponent}
          {ctx.currentTab === ctx.storiesTab && ctx.storiesComponent}
        </div>
      </div>
    </div>
  );
};

export default CurrentList;
