import MusicList from "./links/Music/MusicList";
import NewReleases from "./links/NewReleases/NewReleases";
import StoriesList from "./links/Stories/Stories";
import Playlists from "./links/Playlists/Playlists";
import { SelectedConted, Music, Card, Playlist } from "../Context/Interfaces";
import {
  faMusic,
  faIcons,
  faRecordVinyl,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";

export const MOCK_MUSIC: Music[] = [
  {
    id: "1",
    title: "Any Other Name",
    time: "3:45",
    artist: "Amanda F.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "2",
    title: "Keep",
    time: "3:01",
    artist: "Christian M. D.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "3",
    title: "Time's Blur",
    time: "5:23",
    artist: "Nardwuar",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "4",
    title: "Officium",
    time: "4:12",
    artist: "Chris S.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "5",
    title: "Daniell In The Sea",
    time: "4:43",
    artist: "John J.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "6",
    title: "Following The Time To Sleep",
    time: "4:30",
    artist: "Cullin Malt.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "7",
    title: "Homemade Mountains",
    time: "2:24",
    artist: "Frank Ocean",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "8",
    title: "All These Too, I, Love",
    time: "3:17",
    artist: "The Strokes",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "9",
    title: "A Pile Of Dust",
    time: "8:02",
    artist: "John Z.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "10",
    title: "Solari",
    time: "1:53",
    artist: "Nemo T. T.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "11",
    title: "Dream 3",
    time: "5:57",
    artist: "Chris K.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "12",
    title: "Emotions",
    time: "4:51",
    artist: "Hopkins X.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "13",
    title: "Against The Sky",
    time: "3:19",
    artist: "Hubba Bubba",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "14",
    title: "Hand Covers Bruise",
    time: "1:43",
    artist: "Face 9",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "15",
    title: "The Hourglass",
    time: "10:02",
    artist: "Harold B.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "16",
    title: "Emotions",
    time: "7:20",
    artist: "Bing & Ruth",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "17",
    title: "Boy 1904",
    time: "8:12",
    artist: "7Fingers.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
];

export const MOCK_CARD: Card[] = [
  {
    id: 4,
    icon: faMusic,
    title: "New Releases",
    val: "releases",
    color1: "#F8BA0C",
    color2: "#EF9D88",
  },
  {
    id: 3,
    icon: faIcons,
    title: "Playlists",
    val: "playlists",
    color1: "#6576A0",
    color2: "#9AB9D6",
  },
  {
    id: 1,
    icon: faRecordVinyl,
    title: "Music",
    val: "music",
    color1: "#4BDFFF",
    color2: "#32C9A5",
  },
  {
    id: 2,
    icon: faRadio,
    title: "Stories",
    val: "stories",
    color1: "#DC79FF",
    color2: "#EF9D88",
  },
];

export const MOCK_PLAYLIST: Playlist[] = [
  { id: 1, name: "Summer Vibez", tracks: 51 },
  { id: 2, name: "Cozy Winter", tracks: 192 },
  { id: 3, name: "Shake It", tracks: 47 },
  { id: 4, name: "Rainy Jazz", tracks: 93 },
  { id: 5, name: "Cinematic Universe", tracks: 76 },
  { id: 6, name: "Roadtrip to Italy", tracks: 44 },
  { id: 7, name: "Oldie but Goldie", tracks: 287 },
  { id: 8, name: "Movie Scores", tracks: 39 },
  { id: 9, name: "Lava Lamp", tracks: 82 },
  { id: 10, name: "Nature Sounds", tracks: 66 },
];

export const selectedContent: SelectedConted[] = [
  {
    id: 1,
    title: "Music",
    val: "music",
    component: MusicList,
    mock: MOCK_MUSIC,
  },
  {
    id: 2,
    title: "Stories",
    val: "stories",
    component: StoriesList,
  },
  {
    id: 3,
    title: "Playlist",
    val: "playlists",
    component: Playlists,
    mock: MOCK_PLAYLIST,
  },
  {
    id: 4,
    title: "New Releases",
    val: "releases",
    component: NewReleases,
  },
];
