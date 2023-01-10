import TabLinks from "./TabLinks";
import TabContext from "../../TabContext";
import { useContext } from "react";

const CurrentList = () => {
  const ctx = useContext(TabContext);
  // console.log(ctx.selectContent, 'current list');
  return (
    <div className="overflow-hidden">
      <div>
        <TabLinks />
      </div>
      <div
        className={`${
          ctx.currentTab === "music"
            ? ""
            : "rounded-tl-2xl delay-75 duration-700"
        } relative w-full pl-4 pb-4 pt-4 pr-2 bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl`}
      >
        {/* <div>
          {ctx.currentTab === ctx.musicTab && ctx.musicComponent}
          {ctx.currentTab === ctx.releasesTab && ctx.releasesComponent}
          {ctx.currentTab === ctx.playlistsTab && ctx.playlistsComponent}
          {ctx.currentTab === ctx.storiesTab && ctx.storiesComponent}
        </div> */}

        {ctx.selectContent.map((component) => {
          if (ctx.currentTab === component.val) {
            const Component = component.component;
            return <Component list={component.mock} key={component.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default CurrentList;
