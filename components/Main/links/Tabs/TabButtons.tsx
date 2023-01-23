import { useContext } from "react";
import { Context } from "../../../Context/Context";

const TabList: React.FC = () => {
  const { selectContent, currentTab, setCurrentTab } = useContext(Context);

  return (
    <>
      {selectContent.map((btn) => {
        const activeButtonClass =
          btn.val === currentTab ? "after:translate-y-0 text-black" : "";
        return (
          <button
            key={btn.id}
            onClick={() => setCurrentTab(btn.val)}
            className={`overflow-hidden relative text-center text-l text-grey font-bold py-4 px-12 rounded-t-lg hover:text-dark after:absolute after:h-full after:w-full after:bg-white after:top-0 after:left-0 after:-z-10  hover:after:transition-all after:translate-y-full${activeButtonClass}`}
          >
            {btn.title}
          </button>
        );
      })}
    </>
  );
};

export default TabList;
