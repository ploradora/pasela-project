import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Search from "./Search";

const Nav = (props) => {
  return (
    <nav className="font-myfont w-11/12 m-auto flex align-center justify-between pt-12">
      <div className="flex items-center">
        <button className="flex items-center rounded-lg text-dark-grey border border-solid border-dashboard-border pr-4 pt-2 pb-2">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="pl-3 pr-2 text-xs text-dashboard-btn"
          />
          <span className="text-xs text-dashboard-btn font-bold">
            Dashboard
          </span>
        </button>
        <h1 className="mx-6 not-italic font-bold  text-3xl leading-10 text-dark">
          Audio
        </h1>
        <Search />
      </div>
      <button className="bg-blue text-white pt-2 pb-2 pr-8 pl-6 rounded-lg shadow-md">
        <FontAwesomeIcon icon={faPlus} className="pr-1.5 text-s" />
        <span>Create Playlist</span>
      </button>
    </nav>
  );
};

export default Nav;
