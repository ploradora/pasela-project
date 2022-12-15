import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Nav = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <nav className="font-myfont w-11/12 m-auto flex align-center justify-between pt-12">
      <div className="flex items-center">
        <button className="flex items-center rounded-lg text-dark-grey border border-solid border-dashboard-border pr-4 pt-2 pb-2">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="pl-3 pr-2 text-xs text-dashboard-btn"
          />
          <span className="text-xs text-dashboard-btn font-bold">Dashboard</span>
        </button>
        <h1 className="mx-6 not-italic font-bold  text-3xl leading-10 text-dark">
          Audio
        </h1>
        <div className="relative">
          {!focused && (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute top-1/2 -translate-y-1/2 left-4 text-xs text-grey-input"
            />
          )}
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setFocused(false);
            }}
            type="text"
            className="w-32 h-8 py-3 px-3 border border-solid border-grey-input rounded-2xl bg-transparent text-dark-grey text-sm focus:outline-none focus:border-transparent focus:ring focus:ring-blue"
          />
        </div>
      </div>
      <button className="bg-blue text-white pt-2 pb-2 pr-8 pl-6 rounded-lg shadow-md">
        <FontAwesomeIcon icon={faPlus} className="pr-1.5 text-s" />
        <span>Create Playlist</span>
      </button>
    </nav>
  );
};

export default Nav;
