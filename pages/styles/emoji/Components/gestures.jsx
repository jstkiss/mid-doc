import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
const categories = [
  {
    id: 1,
    name: "Selfie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Gestures_and_Body_Parts/Selfie.webp?raw=true",
  },
];

const Gestures = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Gesture and Body Parts
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
              <p>Sélectionnez une catégorie</p>
            )}
          </div>
        </section>
      </details>
    </section>
  );
};

export default Gestures;
