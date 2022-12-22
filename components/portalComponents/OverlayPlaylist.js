import ReactDOM from "react-dom";
import TabContext from "../TabContext";
import { useContext } from "react";

const OverlayPlaylist = () => {
  const ctx = useContext(TabContext);

  return ReactDOM.createPortal(
    <div
      onClick={() => ctx.setModalState(false)}
      className="absolute top-0 left-0 w-full h-full bg-dark z-40 cursor-pointer bg-grey-100 backdrop-blur-sm"
    ></div>,
    document.getElementById("overlay")
  );
};

export default OverlayPlaylist;
