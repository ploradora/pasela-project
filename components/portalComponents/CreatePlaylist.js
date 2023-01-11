import ReactDOM from "react-dom";
import PlaylistForm from "./PlaylistForm";
import { useContext } from "react";
import TabContext from "../TabContext";
const CreatePlaylist = () => {
  const ctx = useContext(TabContext);

  return ReactDOM.createPortal(
    <>
      <PlaylistForm />
      <div
        onClick={() => ctx.setModalState(false)}
        className="absolute top-0 left-0 w-full h-full bg-dark z-40 cursor-pointer bg-grey-100 backdrop-blur-sm"
      ></div>
    </>,
    document.getElementById("modal")
  );
};

export default CreatePlaylist;
