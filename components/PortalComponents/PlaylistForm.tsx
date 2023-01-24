import { useState, useContext } from "react";
import { Context } from "../Context/Context";

const PlaylistForm = () => {
  const { addNewPlaylist, setCurrentTab, setModalState } = useContext(Context);
  const [query, setQuery] = useState("");
  const [inputEmpty, setInputEmpty] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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

    addNewPlaylist(newPlaylist);
    setCurrentTab("playlists");
    setModalState(false);
  };

  const inputPlaylist = (e: React.FormEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setQuery(value);
    if (value !== "") {
      setInputEmpty(false);
    } else {
      setInputEmpty(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 grid place-self-center rounded-lg p-3.5 bg-white z-50"
    >
      <label className="text-center mb-12 font-bold text-black text-lg">
        Create a playlist
      </label>
      <div className="m-auto w-3/4 mb-8">
        <input
          type="text"
          value={query}
          onChange={inputPlaylist}
          className={`w-full mb-1 px-2 text-black font-bold border-b-2 border-grey-200 focus:outline-none focus:border-b-2 focus:border-blue ${
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
    </form>
  );
};

export default PlaylistForm;
