import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";


const categories = [
  {
    id: 1,
    name: "Boss",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Boss.png?raw=true",
  },
  {
    id: 2,
    name: "Master",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Master.png?raw=true",
  },
  {
    id: 3,
    name: "Police",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Police.png?raw=true",
  },
  {
    id: 4,
    name: "Samurai",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Samurai.png?raw=true",
  },
  {
    id: 5,
    name: "Samurai Warrior",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Samurai_Warrior.png?raw=true",
  },
  {
    id: 6,
    name: "Artist",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Artist.png?raw=true",
  },
  {
    id: 7,
    name: "Clownpunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Clownpunk.png?raw=true",
  },
  {
    id: 8,
    name: "Clowncore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Clowncore.png?raw=true",
  },
  {
    id: 9,
    name: "Viking",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Viking.png?raw=true",
  },
  {
    id: 10,
    name: "Pilgrim",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pilgrim.png?raw=true",
  },
  {
    id: 11,
    name: "Goblin",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Goblin.png?raw=true",
  },
  {
    id: 12,
    name: "Quarterback",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Quarterback.png?raw=true",
  },
  {
    id: 13,
    name: "Catholicpunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Catholicpunk.png?raw=true",
  },
  {
    id: 14,
    name: "Poetcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Poetcore.png?raw=true",
  },
  {
    id: 15,
    name: "Scoutcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Scoutcore.png?raw=true",
  },
  {
    id: 16,
    name: "Kingcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Kingcore.png?raw=true",
  },
  {
    id: 17,
    name: "Princecore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Princecore.png?raw=true",
  },
  {
    id: 18,
    name: "Princesscore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Princesscore.png?raw=true",
  },
  {
    id: 19,
    name: "Royalcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Royalcore.png?raw=true",
  },
  {
    id: 20,
    name: "Knightcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Knightcore.png?raw=true",
  },
  {
    id: 21,
    name: "Roguecore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Roguecore.png?raw=true",
  },
  {
    id: 22,
    name: "Villaincore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Villaincore.png?raw=true",
  },
  {
    id: 23,
    name: "Kidcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Kidcore.png?raw=true",
  },
  {
    id: 24,
    name: "Tweencore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tweencore.png?raw=true",
  },
  {
    id: 25,
    name: "Grandparentcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grandparentcore.png?raw=true",
  },
  {
    id: 26,
    name: "Brocore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Brocore.png?raw=true",
  },
  {
    id: 27,
    name: "",
    image: "",
  },
];



const Professions = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Professions
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
            <div className="flex justify-center items-center">
              {selectedCategoryId ? (
                <Image
                className="w-96"
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

export default Professions;
