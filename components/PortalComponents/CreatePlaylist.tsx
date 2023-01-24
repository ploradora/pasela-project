import ReactDOM from "react-dom";
import PlaylistForm from "./PlaylistForm";
import { useContext } from "react";
import { Context } from "../Context/Context";

const CreatePlaylist = () => {
  const {setModalState} = useContext(Context)

  return ReactDOM.createPortal(
    <>
      <PlaylistForm />
      <div
        onClick={() => setModalState(false)}
        className="absolute top-0 left-0 w-full h-full bg-black z-40 cursor-pointer bg-grey-100 backdrop-blur-sm"
      ></div>
    </>,
    document.getElementById("modal")
  );
};

export default CreatePlaylist;
