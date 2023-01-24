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
  id: number;
  title: string;
  time: string;
  artist: string;
  link: string;
};

export type Playlist = {
  id: number;
  name: string;
  tracks: number;
};

export type Cards = {
  id: number;
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
  mockPlaylist?: Playlist[];
  mockMusic?: Music[];
  mock?: undefined;
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
  addNewPlaylist: (data: { [key: string | number]: string | number }) => void;
  cardData: Cards[];
};

export type OverflowScrollStylingTypes = {
  stylingOnMusicTab?: string;
  children: React.ReactNode;
};
