import OverflowScrollStyling from "../OverflowScrollStyling";
import TabContext from "../../TabContext";
import { useContext } from "react";
import { MOCK_PLAYLIST } from "../mock-data";

const Playlists = () => {
  const ctx = useContext(TabContext);

  return (
    <OverflowScrollStyling>
      <div className="grid grid-card gap-2 w-full h-full">
        {MOCK_PLAYLIST.filter((playlist) =>
          playlist.name.toLowerCase().includes(ctx.filterQuery.toLowerCase())
        ).map((playlist) => (
          <div
            key={playlist.id}
            style={{
              background: "linear-gradient(200deg, #a7b5d9, #d8e4f0)",
            }}
            className="p-2.5  w-full rounded-lg hover:drop-shadow-md cursor-pointer"
          >
            <div className="w-full h-32 bg-white rounded-lg mb-2 bg-transparent"></div>
            <p className="text-dark font-bold -mb-1 ">{playlist.name}</p>
            <p className="text-sm text-dark">{playlist.tracks} tracks</p>
          </div>
        ))}
      </div>
    </OverflowScrollStyling>
  );
};

export default Playlists;
