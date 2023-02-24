import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";



const categories = [
  {
    id: 1,
    name: "Crystalcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Crystalcore.png",
  },
  {
    id: 2,
    name: "Sparklecore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sparklecore.png?raw=true",
  },
  {
    id: 3,
    name: "Rainbowcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rainbowcore.png?raw=true",
  },
  {
    id: 4,
    name: "Pastelwave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pastelwave.png?raw=true",
  },
  {
    id: 5,
    name: "Pastelpunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pastelpunk.png?raw=true",
  },
  {
    id: 6,
    name: "Glowwave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Glowwave.png?raw=true",
  },
  {
    id: 7,
    name: "Glo-Fi",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Glo-Fi.png?raw=true",
  },
  {
    id: 8,
    name: "Neonpunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Neonpunk.png?raw=true",
  },
  {
    id: 9,
    name: "Lightcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lightcore.png?raw=true",
  },
  {
    id: 10,
    name: "Fractalpunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fractalpunk.png?raw=true",
  },
];



const Colors = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Colors, Crystals, Sparkles, and Light
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
                <img
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

export default Colors;
