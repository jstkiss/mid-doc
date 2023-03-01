import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "20s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/20s.png?raw=true",
  },
  {
    id: 2,
    name: "20s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/20s_Pattern.png?raw=true",
  },
  {
    id: 3,
    name: "1920s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1920s_Decor.png?raw=true",
  },
  {
    id: 4,
    name: "30s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/30s.png?raw=true",
  },
  {
    id: 5,
    name: "30s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/30s_Pattern.png?raw=true",
  },
  {
    id: 6,
    name: "1930s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1930s_Decor.png?raw=true",
  },
  {
    id: 7,
    name: "40s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/40s.png?raw=true",
  },
  {
    id: 8,
    name: "40s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/40s_Pattern.png?raw=true",
  },
  {
    id: 9,
    name: "1940s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1940s_Decor.png?raw=true",
  },
  {
    id: 10,
    name: "50s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/50s.png?raw=true",
  },
  {
    id: 11,
    name: "50s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/50s_Pattern.png?raw=true",
  },
  {
    id: 12,
    name: "1950s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1950s_Decor.png?raw=true",
  },
  {
    id: 13,
    name: "60s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/60s.png?raw=true",
  },
  {
    id: 14,
    name: "60s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/60s_Pattern.png?raw=true",
  },
  {
    id: 15,
    name: "1960s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1960s_Decor.png?raw=true",
  },
  {
    id: 16,
    name: "70s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/70s.png?raw=true",
  },
  {
    id: 17,
    name: "70s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/70s_Pattern.png?raw=true",
  },
  {
    id: 18,
    name: "1970s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1970s_Decor.png?raw=true",
  },
  {
    id: 19,
    name: "80s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/80s.png?raw=true",
  },
  {
    id: 20,
    name: "80s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/80s_Pattern.png?raw=true",
  },
  {
    id: 21,
    name: "1980s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1980s_Decor.png?raw=true",
  },
  {
    id: 22,
    name: "90s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/90s.png?raw=true",
  },
  {
    id: 23,
    name: "90s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/90s_Pattern.png?raw=true",
  },
  {
    id: 24,
    name: "1990s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1990s_Decor.png?raw=true",
  },
  {
    id: 25,
    name: "Y2K Design",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Y2K_Design.png?raw=true",
  },
  {
    id: 26,
    name: "Y2K Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Y2K_Pattern.png?raw=true",
  },
  {
    id: 27,
    name: "2000s Pattern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/2000s_Pattern.png?raw=true",
  },
  {
    id: 28,
    name: "2000s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/2000s_Decor.png?raw=true",
  },
  {
    id: 29,
    name: "2010s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/2010s_Decor.png?raw=true",
  },
  {
    id: 30,
    name: "2020s Decor",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/2020s_Decor.png?raw=true",
  },
  {
    id: 31,
    name: "1100s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1100s.png?raw=true",
  },
  {
    id: 32,
    name: "1200s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1200s.png?raw=true",
  },
  {
    id: 33,
    name: "1300s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1300s.png?raw=true",
  },
  {
    id: 34,
    name: "1400s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1400s.png?raw=true",
  },
  {
    id: 35,
    name: "1500s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1500s.png?raw=true",
  },
  {
    id: 36,
    name: "1600s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1600s.png?raw=true",
  },
  {
    id: 37,
    name: "1700s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1700s.png?raw=true",
  },
  {
    id: 38,
    name: "1800s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1800s.png?raw=true",
  },
  {
    id: 39,
    name: "1900s",
    image: "",
  },
  {
    id: 40,
    name: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1900s.png?raw=true",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1900s.png?raw=true",
  },
  {
    id: 41,
    name: "1950s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1950s.png?raw=true",
  },
  {
    id: 42,
    name: "1960s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1960s.png?raw=true",
  },
  {
    id: 43,
    name: "1970s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1970s.png?raw=true",
  },
  {
    id: 44,
    name: "1980s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1980s.png?raw=true",
  },
  {
    id: 45,
    name: "1990s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/1990s.png?raw=true",
  },
  {
    id: 46,
    name: "2000s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/2000s.png?raw=true",
  },
  {
    id: 47,
    name: "2010s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/2010s.png?raw=true",
  },
  {
    id: 48,
    name: "2020s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/2020s.png?raw=true",
  },
  {
    id: 49,
    name: "3000s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/3000s.png?raw=true",
  },
  {
    id: 50,
    name: "4000s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/4000s.png?raw=true",
  },
  {
    id: 51,
    name: "5000s",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/5000s.png?raw=true",
  },
];

const Decade = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Decade Styles
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
              <p>Sélectionnez une catégorie</p>
            )}
          </div>
        </section>
      </details>
    </section>
  );
};

export default Decade;
