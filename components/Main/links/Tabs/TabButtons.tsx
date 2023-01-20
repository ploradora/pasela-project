import { useContext } from "react";
import { Context } from "../../../Context/Context";

const TabList: React.FC = () => {
  const { selectContent, currentTab, setCurrentTab } = useContext(Context);

  return (
    <>
      {selectContent.map((btn) => {
        const isActiveClass =
          btn.val === currentTab
            ? "after:translate-y-0 text-dark bg-white text-black"
            : "";
        return (
          <button
            key={btn.id}
            onClick={() => setCurrentTab(btn.val)}
            className={`overflow-hidden relative text-center text-l text-grey font-bold py-4 px-12 rounded-t-lg hover:text-dark after:absolute after:bg-white after:h-full after:w-full after:top-0 after:left-0 after:-z-10 after:translate-y-full after:transition-all hover:after:transition-all ${isActiveClass}`}
          >
            {btn.title}
          </button>
        );
      })}
    </>
  );
};

export default TabList;
