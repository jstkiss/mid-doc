import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";


const categories = [
  {
    id: 1,
    name: "Cubism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cubism.png?raw=true",
  },
  {
    id: 2,
    name: "Synthetic Cubism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Synthetic_Cubism.png?raw=true",
  },
  {
    id: 3,
    name: "Mechanistic Cubism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mechanistic_Cubism.png?raw=true",
  },
  {
    id: 4,
    name: "Proto-Cubism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Proto-Cubism.png?raw=true",
  },
  {
    id: 5,
    name: "Cubo-Futurism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cubo-Futurism.png?raw=true",
  },
];



const Cubism = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Cubism
          </summary>
          <section className="grid grid-cols-2">
          <div className="flex justify-center items-center flex-col">
            {categories.map((category) => (
              <h1
                className="text-white pl-4 pt-5"
                key={category.id}
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
                alt={
                  categories.find(
                    (category) => category.id === selectedCategoryId
                  ).alt
                }
                width={"100%"}
                height={"100%"}
              />
            ) : (
              <p>S??lectionnez une cat??gorie</p>
            )}
          </div>
        </section>
        </details>
      </section>
  );
};

export default Cubism;
