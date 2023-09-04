import React from "react";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Cat Face",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Cat_Face.webp?raw=true",
  },
  {
    id: 2,
    name: "Dog Face",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Dog_Face.webp?raw=true",
  },
  {
    id: 3,
    name: "Panda Face",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Panda_Face.webp?raw=true",
  },
  {
    id: 4,
    name: "Wolf Face",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Wolf_Face.webp?raw=true",
  },
  {
    id: 5,
    name: "Unicorn Face",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Unicorn_Face.webp?raw=true",
  },
  {
    id: 6,
    name: "Mushroom",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Mushroom.webp?raw=true",
  },
  {
    id: 7,
    name: "Spiral Shell",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Spiral_Shell.webp?raw=true",
  },
  {
    id: 8,
    name: "Spider Web",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Spider_Web.webp?raw=true",
  },
  {
    id: 9,
    name: "Fire",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Fire.webp?raw=true",
  },
  {
    id: 10,
    name: "Rainbow",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Rainbow.webp?raw=true",
  },
  {
    id: 11,
    name: "Cloud With Tornado",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Cloud_With_Tornado.webp?raw=true",
  },
  {
    id: 12,
    name: "Cyclone",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Cyclone.webp?raw=true",
  },
  {
    id: 13,
    name: "Droplet",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Droplet.webp?raw=true",
  },
  {
    id: 14,
    name: "Water Wave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Water_Wave.webp?raw=true",
  },
  {
    id: 15,
    name: "Fog",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Animals_and_Nature/Fog.webp?raw=true",
  },
];



const Animals = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Animals and Nature
          </summary>
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
                <img
                  className="w-96 sticky top-20"
                  src={
                    categories.find(
                      (category) => category.id === selectedCategoryId
                    ).image
                  }
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

export default Animals;
