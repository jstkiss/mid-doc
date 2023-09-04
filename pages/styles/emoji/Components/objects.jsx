import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
const categories = [
  {
    id: 1,
    name: "Optical Disc",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Optical_Disc.webp?raw=true",
  },
  {
    id: 2,
    name: "DVD",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/DVD.webp?raw=true",
  },
  {
    id: 3,
    name: "Hourglass",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Hourglass.webp?raw=true",
  },
  {
    id: 4,
    name: "Hourglass With Flowing Sand",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Hourglass_With_Flowing_Sand.webp?raw=true",
  },
  {
    id: 5,
    name: "Electric Light Bulb",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Electric_Light_Bulb.webp?raw=true",
  },
  {
    id: 6,
    name: "Gear",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Gear.webp?raw=true",
  },
  {
    id: 7,
    name: "Nut And Bolt",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Nut_And_Bolt.webp?raw=true",
  },
  {
    id: 8,
    name: "Brick",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Brick.webp?raw=true",
  },
  {
    id: 9,
    name: "Gem Stone",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Gem_Stone.webp?raw=true",
  },
  {
    id: 10,
    name: "Bomb",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Bomb.webp?raw=true",
  },
  {
    id: 11,
    name: "Firecracker",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Firecracker.webp?raw=true",
  },
  {
    id: 12,
    name: "Fireworks",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Fireworks.webp?raw=true",
  },
  {
    id: 13,
    name: "Firework Sparkler",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Firework_Sparkler.webp?raw=true",
  },
  {
    id: 14,
    name: "Test Tube",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Test_Tube.webp?raw=true",
  },
  {
    id: 15,
    name: "Alembic",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Alembic.webp?raw=true",
  },
  {
    id: 16,
    name: "DNA Double Helix",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/DNA_Double_Helix.webp?raw=true",
  },
  {
    id: 17,
    name: "Petri Dish",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Petri_Dish.webp?raw=true",
  },
  {
    id: 18,
    name: "Microbe",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Microbe.webp?raw=true",
  },
  {
    id: 19,
    name: "Toilet",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Toilet.webp?raw=true",
  },
  {
    id: 20,
    name: "Roll of Paper",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Roll_of_Paper.webp?raw=true",
  },
  {
    id: 21,
    name: "Frame With Picture",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Frame_With_Picture.webp?raw=true",
  },
  {
    id: 22,
    name: "Balloon",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Balloon.webp?raw=true",
  },
  {
    id: 23,
    name: "Party Popper",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Party_Popper.webp?raw=true",
  },
  {
    id: 24,
    name: "Confetti Ball",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Confetti_Ball.webp?raw=true",
  },
  {
    id: 25,
    name: "Artist Palette",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Artist_Palette.webp?raw=true",
  },
  {
    id: 26,
    name: "Clapper Board",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Clapper_Board.webp?raw=true",
  },
  {
    id: 27,
    name: "Game Die",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Game_Die.webp?raw=true",
  },
  {
    id: 28,
    name: "Jigsaw Puzzle Piece",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Jigsaw_Puzzle_Piece.webp?raw=true",
  },
  {
    id: 29,
    name: "Black Chess Pawn",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Black_Chess_Pawn.webp?raw=true",
  },
  {
    id: 30,
    name: "Video Game",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Video_Game.webp?raw=true",
  },
  {
    id: 31,
    name: "Trophy",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Objects/Trophy.webp?raw=true",
  },
];

const Objects = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">Objects</summary>
        <section className="grid grid-cols-2">
          <div className="flex justify-center items-center flex-col">
            {categories.map((category) => (
              <h1
                className="text-white pl-4 pt-5"
                key={category}
                onClick={() => setSelectedCategoryId(category.id)}
              >
                {category.name}
              </h1>
            ))}
          </div>
          <div className="justify-center items-center">
            {selectedCategoryId ? (
              <Image
                className="w-96 sticky top-20"
                src={
                  categories.find(
                    (category) => category.id === selectedCategoryId
                  ).image
                }
                width="431"
                height="431"
                alt="dzdd"
              />
            ) : (
              <p></p>
            )}
          </div>
        </section>
      </details>
    </section>
  );
};

export default Objects;
