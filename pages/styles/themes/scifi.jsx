import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Sci-fi",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sci-fi.png?raw=true",
  },
  {
    id: 2,
    name: "Alchemy",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Alchemy.png?raw=true",
  },
  {
    id: 3,
    name: "Terrestrial",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Terrestrial.png?raw=true",
  },
  {
    id: 4,
    name: "Extraterrestrial",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Extraterrestrial.png?raw=true",
  },
  {
    id: 5,
    name: "Alien",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Alien.png?raw=true",
  },
  {
    id: 6,
    name: "Invaded",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Invaded.png?raw=true",
  },
  {
    id: 7,
    name: "Invasion",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Invasion.png?raw=true",
  },
  {
    id: 8,
    name: "Aurora",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Aurora.png?raw=true",
  },
  {
    id: 9,
    name: "Aurorae",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Aurorae.png?raw=true",
  },
  {
    id: 10,
    name: "Auroracore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Auroracore.png?raw=true",
  },
  {
    id: 11,
    name: "Aurora Borealis",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Aurora_Borealis.png?raw=true",
  },
  {
    id: 12,
    name: "Magic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Magic.png?raw=true",
  },
  {
    id: 13,
    name: "Magicpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Magicpunk.png?raw=true",
  },
  {
    id: 14,
    name: "Mystic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mystic.png?raw=true",
  },
  {
    id: 15,
    name: "Mystical",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mystical.png?raw=true",
  },
  {
    id: 16,
    name: "Psychic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Psychic.png?raw=true",
  },
  {
    id: 17,
    name: "Metaphysical",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Metaphysical.png?raw=true",
  },
  {
    id: 18,
    name: "UFO",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/UFO.png?raw=true",
  },
  {
    id: 19,
    name: "Lightsaber",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lightsaber.png?raw=true",
  },
  {
    id: 20,
    name: "Aetherpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Aetherpunk.png?raw=true",
  },
  {
    id: 21,
    name: "Decopunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Decopunk.png?raw=true",
  },
  {
    id: 22,
    name: "Dracopunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dracopunk.png?raw=true",
  },
  {
    id: 23,
    name: "Dragoncore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dragoncore.png?raw=true",
  },
  {
    id: 24,
    name: "Unicorncore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Unicorncore.png?raw=true",
  },
  {
    id: 25,
    name: "Fairycore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fairycore.png?raw=true",
  },
  {
    id: 26,
    name: "Fairy Folk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fairy_Folk.png?raw=true",
  },
  {
    id: 27,
    name: "Spriggancore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Spriggancore.png?raw=true",
  },
  {
    id: 28,
    name: "Angelcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Angelcore.png?raw=true",
  },
  {
    id: 29,
    name: "Supernatural",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Supernatural.png?raw=true",
  },
  {
    id: 30,
    name: "Cryptidcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cryptidcore.png?raw=true",
  },
  {
    id: 31,
    name: "Ghostcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ghostcore.png?raw=true",
  },
  {
    id: 32,
    name: "Spiritcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Spiritcore.png?raw=true",
  },
  {
    id: 33,
    name: "Cypernoir",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cypernoir.png?raw=true",
  },
  {
    id: 34,
    name: "Goblincore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Goblincore.png?raw=true",
  },
  {
    id: 35,
    name: "Rangercore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rangercore.png?raw=true",
  },
  {
    id: 36,
    name: "Witchcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Witchcore.png?raw=true",
  },
  {
    id: 37,
    name: "Wizardcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Wizardcore.png?raw=true",
  },
  {
    id: 38,
    name: "Magewave",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Magewave.png?raw=true",
  },
  {
    id: 39,
    name: "Mythpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mythpunk.png?raw=true",
  },
  {
    id: 40,
    name: "Illuminati",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Illuminati.png?raw=true",
  },
];

const Scifi = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">Sci-fi</summary>
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
          <div className="flex justify-center items-center">
            {selectedCategoryId ? (
              <img
                className="w-80"
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

export default Scifi;
