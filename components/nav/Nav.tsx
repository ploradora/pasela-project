import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreatePlaylist from "../PortalComponents/CreatePlaylist";
import { useContext } from "react";

import Search from "./Search/Search";
import { Context } from "../Context/Context";

const Nav: React.FC = () => {
  const { setModalState, modalState } = useContext(Context);

  return (
    <>
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
        <button
          onClick={() => setModalState(true)}
          className="bg-blue text-white pt-2 pb-2 pr-8 pl-6 rounded-lg shadow-md"
        >
          <FontAwesomeIcon icon={faPlus} className="pr-1.5 text-s" />
          <span className="font-bold">Create Playlist</span>
        </button>
        {modalState && <CreatePlaylist />}
      </nav>
    </>
  );
};

export default Nav;
