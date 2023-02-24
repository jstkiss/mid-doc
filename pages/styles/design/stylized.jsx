import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Design",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Design.png?raw=true",
  },
  {
    id: 2,
    name: "Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Style.png?raw=true",
  },
  {
    id: 3,
    name: "Stylized",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Stylized.png?raw=true",
  },
  {
    id: 4,
    name: "Combine",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Combine.png?raw=true",
  },
  {
    id: 5,
    name: "Combination",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Combination.png?raw=true",
  },
  {
    id: 6,
    name: "Seamless",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Seamless.png?raw=true",
  },
  {
    id: 7,
    name: "Layered",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Layered.png?raw=true",
  },
  {
    id: 8,
    name: "Photobash",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Photobash.png?raw=true",
  },
  {
    id: 9,
    name: "Cut",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cut.png?raw=true",
  },
  {
    id: 10,
    name: "Bubble Design",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bubble_Design.png?raw=true",
  },
  {
    id: 11,
    name: "Extreme Bubble Design",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Extreme_Bubble_Design.png?raw=true",
  },
  {
    id: 12,
    name: "Liquify",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Liquify.png?raw=true",
  },
  {
    id: 13,
    name: "Bling",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bling.png?raw=true",
  },
  {
    id: 14,
    name: "Jewel Tones",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Jewel_Tones.png?raw=true",
  },
  {
    id: 15,
    name: "Blocky",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Blocky.png?raw=true",
  },
  {
    id: 16,
    name: "Lissajous",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lissajous.png?raw=true",
  },
  {
    id: 17,
    name: "Patched",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Patched.png?raw=true",
  },
  {
    id: 18,
    name: "Alignment",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Alignment.png?raw=true",
  },
  {
    id: 19,
    name: "Misalignment",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Misalignment.png?raw=true",
  },
  {
    id: 20,
    name: "Compression",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Compression.png?raw=true",
  },
  {
    id: 21,
    name: "Droste Effect",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Droste_Effect.png?raw=true",
  },
  {
    id: 22,
    name: "Stabilimentum",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Stabilimentum.png?raw=true",
  },
  {
    id: 23,
    name: "Precision",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Precision.png?raw=true",
  },
  {
    id: 24,
    name: "Molecular",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Molecular.png?raw=true",
  },
  {
    id: 25,
    name: "Qubit",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Qubit.png?raw=true",
  },
  {
    id: 26,
    name: "Shockwave",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Shockwave.png?raw=true",
  },
  {
    id: 27,
    name: "Edge-To-Edge",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Edge-To-Edge.png?raw=true",
  },
  {
    id: 28,
    name: "Oddly Satisfying",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Oddly_Satisfying.png?raw=true",
  },
  {
    id: 29,
    name: "Zygomorphic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Zygomorphic.png?raw=true",
  },
];

const Stylized = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">Stylized</summary>
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

export default Stylized;
