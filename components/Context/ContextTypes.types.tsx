export type MockMusic = {
  music: {
    id: string;
    title: string;
    time: string;
    artist: string;
    link: string;
  }[];
};
export type MockCard = {
  card: {
    id: number;
    icon: any;
    title: string;
    val: string;
    color1: string;
    color2: string;
  }[];
};

export type MockPlaylist = {
  playlist: {
    id: number;
    name: string;
    tracks: number;
  }[];
};

export type SelectedContent = {
  content: {
    id: number;
    title: string;
    val: string;
    component?: any;
    mock?: MockMusic[] | MockPlaylist[];
  }[];
};
