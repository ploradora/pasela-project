import React, { useContext } from "react";
import { Context } from "../../../Context/Context";
import { MusicListProps, PlaylistsProps } from "../../../Context/Interfaces";

const MainContentItem: React.FC = () => {
  const { selectContent, currentTab } = useContext(Context);

  return (
    <>
      {selectContent.map((component) => {
        if (currentTab === component.val) {
          const Component = component.component as React.FC<MusicListProps | PlaylistsProps>;
          if (component.musicMock) {
            return <Component list={component.musicMock} key={component.id} />;
          }
          if (component.playlistMock) {
            return <Component list={component.playlistMock} key={component.id} />;
          }
        }
      })}
    </>
  );
};

export default MainContentItem;
