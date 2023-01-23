import React, { useContext } from "react";
import { Context } from "../../../Context/Context";
import { MusicListProps, PlaylistsProps } from "../../../Context/Interfaces";
const MainContentItem: React.FC = () => {
  const { selectContent, currentTab } = useContext(Context);

  return (
    <>
      {selectContent.map((component) => {
        if (currentTab === component.val) {
          const Component = component.component as React.FC<
            MusicListProps | PlaylistsProps
          >;
          if (component.val === "playlists") {
            return (
              <Component list={component.mockPlaylist} key={component.id} />
            );
          }
          if (component.val === "music") {
            return <Component list={component.mockMusic} key={component.id} />;
          }
        }
      })}
    </>
  );
};

export default MainContentItem;
