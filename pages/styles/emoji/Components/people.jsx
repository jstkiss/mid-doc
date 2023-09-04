import React from "react";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Man Technologist",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/People_and_Fantasy/Man_Technologist.webp?raw=true",
  },
  {
    id: 2,
    name: "Woman Technologist",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/People_and_Fantasy/Woman_Technologist.webp?raw=true",
  },
  {
    id: 3,
    name: "Mage",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/People_and_Fantasy/Mage.webp?raw=true",
  },
  {
    id: 4,
    name: "Man Mage",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/People_and_Fantasy/Man_Mage.webp?raw=true",
  },
  {
    id: 5,
    name: "Facepalm",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/People_and_Fantasy/Facepalm.webp?raw=true",
  },
  {
    id: 6,
    name: "Man Facepalming",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/People_and_Fantasy/Man_Facepalming.webp?raw=true",
  },
  {
    id: 7,
    name: "Woman Facepalming",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/People_and_Fantasy/Woman_Facepalming.webp?raw=true",
  },
];



const People = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
            People and Fantasy
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

export default People;
