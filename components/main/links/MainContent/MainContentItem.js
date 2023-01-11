import TabContext from "../../../TabContext";
import { useContext } from "react";

const MainContentItem = () => {
  const ctx = useContext(TabContext);

  return (
    <>
      {ctx.selectContent.map((component) => {
        if (ctx.currentTab === component.val) {
          const Component = component.component;
          return <Component list={component.mock} key={component.id} />;
        }
      })}
    </>
  );
};

export default MainContentItem;
