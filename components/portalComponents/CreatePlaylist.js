import ReactDOM from "react-dom";
import TabContext from "../TabContext";
import { useState, useContext } from "react";

const CreatePlaylist = () => {
  const ctx = useContext(TabContext);
  const [query, setQuery] = useState("");
  const [inputEmpty, setInputEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "" || query === " ") {
      setInputEmpty(true);
      return;
    }

    const newPlaylist = {
      id: Math.floor(Math.random() * 10000000),
      name: query,
      tracks: 0,
    };

    ctx.addNewPlaylist(newPlaylist);

    ctx.setCurrentTab("playlists");
    ctx.setModalState(false);
  };

  const inputPlaylist = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value !== "" || value !== " ") {
      setInputEmpty(false);
    } else {
      setInputEmpty(true);
    }
  };

  return ReactDOM.createPortal(
    <form
      onSubmit={handleSubmit}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 grid place-self-center rounded-lg p-3.5 bg-white z-50"
    >
      <label className="text-center mb-12 font-bold text-dark text-lg">
        Create a playlist
      </label>
      <div className="m-auto w-3/4 mb-8">
        <input
          type="text"
          value={query}
          onChange={inputPlaylist}
          className={`w-full mb-1 px-2 text-dark font-bold border-b-2 border-grey-200 focus:outline-none focus:border-b-2 focus:border-blue ${
            inputEmpty ? "border-red focus:border-red" : ""
          }`}
        />
        {inputEmpty && (
          <p className="absolute text-sm h-2 text-red">
            Name of the playlist can't be blank
          </p>
        )}
      </div>
      <button
        type="submit"
        className="m-auto bg-blue font-bold text-white rounded-lg px-8 py-2 shadow-md cursor-pointer"
      >
        Submit
      </button>
    </form>,
    document.getElementById("modal")
  );
};

export default CreatePlaylist;
