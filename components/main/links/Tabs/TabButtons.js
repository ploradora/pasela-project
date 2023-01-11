import TabContext from "../../../TabContext";
import { useContext } from "react";

const TabList = () => {
  const ctx = useContext(TabContext);
  
  return (
    <>
      {ctx.selectContent.map((btn) => (
        <button
          key={btn.id}
          onClick={() => ctx.setCurrentTab(btn.val)}
          className={`overflow-hidden relative text-center text-l text-grey font-bold py-4 px-12 rounded-t-lg hover:text-dark after:absolute after:bg-white after:h-full after:w-full after:top-0 after:left-0 after:-z-10 after:translate-y-full after:transition-all hover:after:transition-all ${
            btn.val === ctx.currentTab ? "after:translate-y-0 text-darker" : ""
          }`}
        >
          {btn.title}
        </button>
      ))}
    </>
  );
};

export default TabList;
