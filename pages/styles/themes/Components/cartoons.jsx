import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Cartoon",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cartoon.webp?raw=true",
  },
  {
    id: 2,
    name: "Marvel Comics",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Marvel_Comics.webp?raw=true",
  },
  {
    id: 3,
    name: "Anime",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Anime.webp?raw=true",
  },
  {
    id: 4,
    name: "Animecore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Animecore.webp?raw=true",
  },
  {
    id: 5,
    name: "Manga",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Manga.webp?raw=true",
  },
  {
    id: 6,
    name: "Kawaii",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Kawaii.webp?raw=true",
  },
  {
    id: 7,
    name: "Horror Anime",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/Horror_Anime.webp?raw=true",
  },
  {
    id: 8,
    name: "Vampirella Styled",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/Vampirella_Styled.webp?raw=true",
  },
  {
    id: 9,
    name: "UwU",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/UwU.webp?raw=true",
  },
];

const Cartoons = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Cartoons, Anime, and Comics
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
          <div className="justify-center items-center">
            {selectedCategoryId ? (
              <Image
                className="w-96 sticky top-20"
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
                width="431"
                height="431"
              />
            ) : (
              <p className="text-customyello">Sélectionnez une catégorie</p>
            )}
          </div>
        </section>
      </details>
    </section>
  );
};

export default Cartoons;
