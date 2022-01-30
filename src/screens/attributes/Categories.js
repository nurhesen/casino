import {
  KenoIcon,
  PokerIcon,
  RacingDogsIcon,
  RouletteIcon,
  VideoSlotsIcon,
} from "../../icons/MiddleIcons";
const gcolor = "white";
const Categories = [
  {
    name: "Video Slots",
    icon: (color = gcolor) => <VideoSlotsIcon color={color} />,
  },
  {
    name: "Video Poker",
    icon: (color = gcolor) => <PokerIcon color={color} />,
  },
  {
    name: "Roulette",
    icon: (color = gcolor) => <RouletteIcon color={color} />,
  },
  { name: "Keno", icon: (color = gcolor) => <KenoIcon color={color} /> },
  {
    name: "Racing Dogs",
    icon: (color = gcolor) => <RacingDogsIcon color={color} />,
  },
];
export default Categories;
