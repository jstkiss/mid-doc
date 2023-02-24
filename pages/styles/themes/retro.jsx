import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Retro",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Retro.png?raw=true",
  },
  {
    id: 2,
    name: "Retrowave",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Retrowave.png?raw=true",
  },
  {
    id: 3,
    name: "Nostalgiacore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nostalgiacore.png?raw=true",
  },
  {
    id: 4,
    name: "Nostalgia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nostalgia.png?raw=true",
  },
  {
    id: 5,
    name: "Vintage",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Vintage.png?raw=true",
  },
  {
    id: 6,
    name: "Antique",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Antique.png?raw=true",
  },
  {
    id: 7,
    name: "Cyberpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cyberpunk.png?raw=true",
  },
  {
    id: 8,
    name: "Postcyberpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Postcyberpunk.png?raw=true",
  },
  {
    id: 9,
    name: "Atompunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Atompunk.png?raw=true",
  },
  {
    id: 10,
    name: "Nanopunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nanopunk.png?raw=true",
  },
  {
    id: 11,
    name: "Raypunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Raypunk.png?raw=true",
  },
  {
    id: 12,
    name: "Rollerwave",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rollerwave.png?raw=true",
  },
  {
    id: 13,
    name: "Rustic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rustic.png?raw=true",
  },
  {
    id: 14,
    name: "Rusticcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rusticcore.png?raw=true",
  },
  {
    id: 15,
    name: "Rococopunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rococopunk.png?raw=true",
  },
  {
    id: 16,
    name: "Pre-Historic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pre-Historic.png?raw=true",
  },
  {
    id: 17,
    name: "Historic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Historic.png?raw=true",
  },
  {
    id: 18,
    name: "Prehistoricore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Prehistoricore.png?raw=true",
  },
  {
    id: 19,
    name: "Jurassic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Jurassic.png?raw=true",
  },
  {
    id: 20,
    name: "Ice Age",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ice_Age.png?raw=true",
  },
  {
    id: 21,
    name: "Wild West",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Wild_West.png?raw=true",
  },
  {
    id: 22,
    name: "Modern",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Modern.png?raw=true",
  },
  {
    id: 23,
    name: "Modernismo",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Modernismo.png?raw=true",
  },
  {
    id: 24,
    name: "Futuristic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Futuristic.png?raw=true",
  },
  {
    id: 25,
    name: "Futurism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Futurism.png?raw=true",
  },
  {
    id: 26,
    name: "Future Funk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Future_Funk.png?raw=true",
  },
  {
    id: 27,
    name: "Retro-Futurism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Retro-Futurism.png?raw=true",
  },
  {
    id: 28,
    name: "Cassette Futurism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cassette_Futurism.png?raw=true",
  },
  {
    id: 29,
    name: "Afrofuturist",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Afrofuturist.png?raw=true",
  },
];

const Retro = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Retro/Modern
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

export default Retro;
