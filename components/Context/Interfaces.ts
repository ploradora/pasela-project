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

export interface Music {
  id: string;
  title: string;
  time: string;
  artist: string;
  link: string;
}

export interface Playlist {
  id: number;
  name: string;
  tracks: number;
}

export interface Cards {
  id?: number;
  icon: any;
  title: string;
  val: string;
  color1: string;
  color2: string;
}

export interface SelectedConted {
  id: number;
  title: string;
  val: string;
  component: React.FC;
  mock?: Music[] | Playlist[];
}
