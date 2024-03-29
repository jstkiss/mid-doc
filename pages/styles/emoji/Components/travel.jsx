import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Circus Tent",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Travel_and_Places/Circus_Tent.webp?raw=true",
  },
  {
    id: 2,
    name: "Hindu Temple",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Travel_and_Places/Hindu_Temple.webp?raw=true",
  },
  {
    id: 3,
    name: "Shinto Shrine",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Travel_and_Places/Shinto_Shrine.webp?raw=true",
  },
  {
    id: 4,
    name: "Kaaba",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Travel_and_Places/Kaaba.webp?raw=true",
  },
];

const Travel = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Travel and Places
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

export default Travel;
