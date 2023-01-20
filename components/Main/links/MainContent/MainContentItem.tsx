import { useContext } from "react";
import { Context } from "../../../Context/Context";

const MainContentItem: React.FC = () => {
  const { selectContent, currentTab } = useContext(Context);

  return (
    <>
      {selectContent.map((component) => {
        if (currentTab === component.val) {
          const Component = component.component;
          return <Component list={component.mock} key={component.id} />;
        }
      })}
    </>
  );
};

export default MainContentItem;
