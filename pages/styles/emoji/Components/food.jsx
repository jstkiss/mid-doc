import React from "react";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Red Apple",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Red_Apple.webp?raw=true",
  },
  {
    id: 2,
    name: "Green Apple",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Green_Apple.webp?raw=true",
  },
  {
    id: 3,
    name: "Banana",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Banana.webp?raw=true",
  },
  {
    id: 4,
    name: "Cherries",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Cherries.webp?raw=true",
  },
  {
    id: 5,
    name: "Watermelon",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Watermelon.webp?raw=true",
  },
  {
    id: 6,
    name: "Kiwifruit",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Kiwifruit.webp?raw=true",
  },
  {
    id: 7,
    name: "Coconut",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Coconut.webp?raw=true",
  },
  {
    id: 8,
    name: "Hot Pepper",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Hot_Pepper.webp?raw=true",
  },
  {
    id: 9,
    name: "Pretzel",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Food_and_Drink/Pretzel.webp?raw=true",
  },
];



const Food= () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Food and Drink
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

export default Food;
