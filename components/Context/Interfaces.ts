// import MusicList from "../Main/links/Music/MusicList";
// import NewReleases from "../Main/links/NewReleases/NewReleases";
// import StoriesList from "../Main/links/Stories/Stories";
// import Playlists from "../Main/links/Playlists/Playlists";
import React from "react";

export interface CardsListProps {
  cards: Cards[];
}

export interface MusicListProps {
  list: Music[];
}

export interface PlaylistsProps {
  list: Playlist[];
}

export interface SelectedContedProps {
  content: SelectedConted[];
}

export type Music = {
  song?: object;
  id?: string;
  title: string;
  time: string;
  artist: string;
  link: string;
};

export type Playlist = {
  id?: number;
  name: string;
  tracks: number;
  list?: object;
};

export type Cards = {
  id?: number;
  icon: any;
  title: string;
  val: string;
  color1: string;
  color2: string;
};

export type SelectedConted = {
  id: number;
  title: string;
  val: string;
  component: React.FC;
  mock?: Music[] | Playlist[];
};

export type StateTypes = {
  currentTab: string;
  currentListData: Music[];
  filterQuery: string;
  modalState: boolean;
  selectContent: SelectedConted[];
  setCurrentTab: (cld: string) => void;
  setCurrentListData: (ld: []) => void;
  setFilterQuery: (input: string) => void;
  setModalState: (type: boolean) => void;
  setSelectContent: (content: []) => void;
  addNewPlaylist: (playlist: object) => void;
  cardData: Cards[];
};

export type SearchTypes = {
  value: any;
  onChange: any;
  onFocus: any;
  onBlur: any;
  type: string;
  className: string;
};

export type OverflowScrollStylingTypes = {
  stylingOnMusicTab?: string;
  children: React.ReactNode;
};
