import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Warmcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Warmcore.webp?raw=true",
  },
  {
    id: 2,
    name: "Lovecore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lovecore.webp?raw=true",
  },
  {
    id: 3,
    name: "Happycore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Happycore.webp?raw=true",
  },
  {
    id: 4,
    name: "Smilecore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Smilecore.webp?raw=true",
  },
  {
    id: 5,
    name: "Gloomcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Gloomcore.webp?raw=true",
  },
  {
    id: 6,
    name: "Dullcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dullcore.webp?raw=true",
  },
  {
    id: 7,
    name: "Dazecore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dazecore.webp?raw=true",
  },
  {
    id: 8,
    name: "Sleepycore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sleepycore.webp?raw=true",
  },
  {
    id: 9,
    name: "Horror Styled",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/Horror_Styled.webp?raw=true",
  },
  {
    id: 10,
    name: "Horrorism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/Horrorism.webp?raw=true",
  },
  {
    id: 11,
    name: "Cosmic Horror",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/Cosmic_Horror.webp?raw=true",
  },
  {
    id: 12,
    name: "HorrorBooru",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/HorrorBooru.webp?raw=true",
  },
  {
    id: 13,
    name: "Macabre",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/Macabre.webp?raw=true",
  },
  {
    id: 14,
    name: "20s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/20s_Horror_Style.webp?raw=true",
  },
  {
    id: 15,
    name: "20s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/20s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 16,
    name: "30s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/30s_Horror_Style.webp?raw=true",
  },
  {
    id: 17,
    name: "Sleepycore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sleepycore.webp?raw=true",
  },
  {
    id: 18,
    name: "30s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/30s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 19,
    name: "40s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/40s_Horror_Style.webp?raw=true",
  },
  {
    id: 20,
    name: "40s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/40s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 21,
    name: "50s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/50s_Horror_Style.webp?raw=true",
  },
  {
    id: 22,
    name: "50s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/50s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 23,
    name: "60s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/60s_Horror_Style.webp?raw=true",
  },
  {
    id: 24,
    name: "60s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/60s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 25,
    name: "70s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/70s_Horror_Style.webp?raw=true",
  },
  {
    id: 26,
    name: "70s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/70s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 27,
    name: "80s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/80s_Horror_Style.webp?raw=true",
  },
  {
    id: 28,
    name: "80s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/80s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 29,
    name: "90s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/90s_Horror_Style.webp?raw=true",
  },
  {
    id: 30,
    name: "90s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/90s_Styled_Horror_Movie.webp?raw=true",
  },
  {
    id: 31,
    name: "2000s Horror Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/2000s_Horror_Style.webp?raw=true",
  },
  {
    id: 32,
    name: "2000s Styled Horror Movie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Midjourney_Styles/2000s_Styled_Horror_Movie.webp?raw=true",
  },
];

const Mood = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Mood Based Themes
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
                width="431"
                height="431"
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

export default Mood;
