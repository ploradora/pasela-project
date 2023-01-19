import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import SearchInput from "./SearchInput";
import { Context } from "../../Context/Context";

const Search: React.FC = () => {
  const { setFilterQuery } = useContext(Context);

  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");

  const inputFilter = (e: any) => {
    setFilterQuery(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="relative">
      {!focused && (
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute top-1/2 -translate-y-1/2 left-4 text-xs text-grey-input"
        />
      )}
      <SearchInput
        value={query}
        onChange={inputFilter}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
          setFilterQuery("");
          setQuery("");
        }}
        type="text"
        className="w-32 h-8 py-3 px-3 border border-solid border-grey-input rounded-2xl bg-transparent text-dark-grey text-sm focus:outline-none focus:border-transparent focus:ring focus:ring-blue"
      />
    </div>
  );
};

export default Search;
