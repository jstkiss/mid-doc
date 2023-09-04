import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Cityscape",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cityscape.webp?raw=true",
  },
  {
    id: 2,
    name: "Architecture",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Architecture.webp?raw=true",
  },
  {
    id: 3,
    name: "Balinese Architecture",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Balinese_Architecture.webp?raw=true",
  },
  {
    id: 4,
    name: "Structure",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Structure.webp?raw=true",
  },
  {
    id: 5,
    name: "Structural",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Structural.webp?raw=true",
  },
  {
    id: 6,
    name: "Manufactured",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Manufactured.webp?raw=true",
  },
  {
    id: 7,
    name: "Bronzepunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bronzepunk.webp?raw=true",
  },
  {
    id: 8,
    name: "Steelpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Steelpunk.webp?raw=true",
  },
  {
    id: 9,
    name: "Clockpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Clockpunk.webp?raw=true",
  },
  {
    id: 10,
    name: "Steampunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Steampunk.webp?raw=true",
  },
  {
    id: 11,
    name: "Dieselpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dieselpunk.webp?raw=true",
  },
  {
    id: 12,
    name: "Gadgetpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Gadgetpunk.webp?raw=true",
  },
  {
    id: 13,
    name: "Salvagepunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Salvagepunk.webp?raw=true",
  },
  {
    id: 14,
    name: "Silkpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Silkpunk.webp?raw=true",
  },
  {
    id: 15,
    name: "Sandalpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sandalpunk.webp?raw=true",
  },
  {
    id: 16,
    name: "Swordpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Swordpunk.webp?raw=true",
  },
  {
    id: 17,
    name: "Cassettepunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cassettepunk.webp?raw=true",
  },
  {
    id: 18,
    name: "Formicapunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Formicapunk.webp?raw=true",
  },
  {
    id: 19,
    name: "Brutalism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Brutalism.webp?raw=true",
  },
  {
    id: 20,
    name: "Sphinx",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sphinx.webp?raw=true",
  },
  {
    id: 21,
    name: "Ziggurat",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ziggurat.webp?raw=true",
  },
  {
    id: 22,
    name: "Industrial Design",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Industrial_Design.webp?raw=true",
  },
  {
    id: 23,
    name: "Googie",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Googie.webp?raw=true",
  },
  {
    id: 24,
    name: "Shack",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Shack.webp?raw=true",
  },
  {
    id: 25,
    name: "Property",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Property.webp?raw=true",
  },
  {
    id: 26,
    name: "Company",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Company.webp?raw=true",
  },
  {
    id: 27,
    name: "Playground",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Playground.webp?raw=true",
  },
  {
    id: 28,
    name: "Poolcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Poolcore.webp?raw=true",
  },
  {
    id: 29,
    name: "Labcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Labcore.webp?raw=true",
  },
  {
    id: 30,
    name: "Nuclear",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nuclear.webp?raw=true",
  },
  {
    id: 31,
    name: "Machine",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Machine.webp?raw=true",
  },
  {
    id: 32,
    name: "Submachine",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Submachine.webp?raw=true",
  },
  {
    id: 33,
    name: "Robotic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Robotic.webp?raw=true",
  },
  {
    id: 34,
    name: "Cyborgism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cyborgism.webp?raw=true",
  },
  {
    id: 35,
    name: "Legopunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Legopunk.webp?raw=true",
  },
  {
    id: 36,
    name: "	Legogearpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Legogearpunk.webp?raw=true",
  },
  {
    id: 37,
    name: "Tinkercore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tinkercore.webp?raw=true",
  },
  {
    id: 38,
    name: "Craftcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Craftcore.webp?raw=true",
  },
  {
    id: 39,
    name: "Stimwave",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Stimwave.webp?raw=true",
  },
  {
    id: 40,
    name: "Wormcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Wormcore.webp?raw=true",
  },
  {
    id: 41,
    name: "Barbiecore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Barbiecore.webp?raw=true",
  },
  {
    id: 42,
    name: "Dollcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dollcore.webp?raw=true",
  },
  {
    id: 43,
    name: "Sanriocore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sanriocore.webp?raw=true",
  },
  {
    id: 44,
    name: "Palewave",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Palewave.webp?raw=true",
  },
  {
    id: 45,
    name: "Normcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Normcore.webp?raw=true",
  },
  {
    id: 46,
    name: "Bombacore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bombacore.webp?raw=true",
  },
  {
    id: 47,
    name: "Thriftcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Thriftcore.webp?raw=true",
  },
  {
    id: 48,
    name: "Dollpunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dollpunk.webp?raw=true",
  },
];

const Architecture = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Architecture and Manufactured
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
              <p>Sélectionnez une catégorie</p>
            )}
          </div>
        </section>
      </details>
    </section>
  );
};

export default Architecture;
