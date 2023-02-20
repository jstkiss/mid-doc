import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Gourmet",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Gourmet.png?raw=true",
  },
  {
    id: 2,
    name: "Cleancore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cleancore.png?raw=true",
  },
  {
    id: 3,
    name: "Safetycore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Safetycore.png?raw=true",
  },
  {
    id: 4,
    name: "Academia",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Academia.png?raw=true",
  },
  {
    id: 5,
    name: "Tinycore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tinycore.png?raw=true",
  },
  {
    id: 6,
    name: "Miniaturecore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Miniaturecore.png?raw=true",
  },
  {
    id: 7,
    name: "Miniature World",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Miniature_World.png?raw=true",
  },
  {
    id: 8,
    name: "Honeycore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Honeycore.png?raw=true",
  },
  {
    id: 9,
    name: "Jamcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Jamcore.png?raw=true",
  },
  {
    id: 10,
    name: "MLG",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/MLG.png?raw=true",
  },
  {
    id: 11,
    name: "Materialisimo",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Materialisimo.png?raw=true",
  },
  {
    id: 12,
    name: "Slimepunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Slimepunk.png?raw=true",
  },
  {
    id: 13,
    name: "Cuberpunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cuberpunk.png?raw=true",
  },
];



const Other = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Other Themes
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

export default Other;
