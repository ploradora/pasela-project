import {
  faMusic,
  faIcons,
  faRecordVinyl,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";

export const MOCK_MUSIC = [
  {
    id: "1",
    title: "Any Other Name",
    time: "3:45",
    artist: "Amanda F.",
  },
  {
    id: "2",
    title: "Keep",
    time: "3:01",
    artist: "Christian M. D.",
  },
  { id: "3", title: "Time's Blur", time: "5:23", artist: "Nardwuar" },
  { id: "4", title: "Officium", time: "4:12", artist: "Chris S." },
  { id: "5", title: "Daniell In The Sea", time: "4:43", artist: "John J." },
  {
    id: "6",
    title: "Following The Time To Sleep",
    time: "4:30",
    artist: "Cullin Malt.",
  },
  {
    id: "7",
    title: "Homemade Mountains",
    time: "2:24",
    artist: "Frank Ocean",
  },
  {
    id: "8",
    title: "All These Too, I, Love",
    time: "3:17",
    artist: "The Strokes",
  },
  { id: "9", title: "A Pile Of Dust", time: "8:02", artist: "John Z." },
  {
    id: "10",
    title: "Solari",
    time: "1:53",
    artist: "Nemo T. T.",
  },
  {
    id: "11",
    title: "Dream 3",
    time: "5:57",
    artist: "Chris K.",
  },
  { id: "12", title: "Emotions", time: "4:51", artist: "Hopkins X." },
  {
    id: "13",
    title: "Against The Sky",
    time: "3:19",
    artist: "Hubba Bubba",
  },
  {
    id: "14",
    title: "Hand Covers Bruise",
    time: "1:43",
    artist: "Face 9",
  },
  {
    id: "15",
    title: "The Hourglass",
    time: "10:02",
    artist: "Harold B.",
  },
  { id: "16", title: "Emotions", time: "7:20", artist: "Bing & Ruth" },
  {
    id: "17",
    title: "Boy 1904",
    time: "8:12",
    artist: "7Fingers.",
  },
];

export const MOCK_CARD = [
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

export const MOCK_PLAYLIST = [
  { name: "Summer Vibez", tracks: 51 },
  { name: "Cozy Winter", tracks: 192 },
  { name: "Shake It", tracks: 47 },
  { name: "Rainy Jazz", tracks: 93 },
  { name: "Cinematic Universe", tracks: 136 },
];
