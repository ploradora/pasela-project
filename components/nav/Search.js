import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import TabContext from "../TabContext";

const Search = (props) => {
  const ctx = useContext(TabContext);
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");

  const inputFilter = (e) => {
    ctx.setFilterQuery(e.target.value);
    setQuery(e.target.value);
  };

  // if(ctx.currentTab === 'music') {
  //   ctx.setFilterQuery(query);

  // }
  // if(ctx.currentTab === 'playlists') {
  //   ctx.setFilterQuery(query);

  // }

  return (
    <div className="relative">
      {!focused && (
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute top-1/2 -translate-y-1/2 left-4 text-xs text-grey-input"
        />
      )}
      <input
        value={query}
        onChange={inputFilter}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
          ctx.setFilterQuery("");
          setQuery("");
        }}
        type="text"
        className="w-32 h-8 py-3 px-3 border border-solid border-grey-input rounded-2xl bg-transparent text-dark-grey text-sm focus:outline-none focus:border-transparent focus:ring focus:ring-blue"
      />
    </div>
  );
};

export default Search;
