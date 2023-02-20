import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";



const categories = [
  {
    id: 1,
    name: "Music",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Music.png?raw=true",
  },
  {
    id: 2,
    name: "Musical",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Musical.png?raw=true",
  },
  {
    id: 3,
    name: "Musical Notation",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Musical_Notation.png?raw=true",
  },
  {
    id: 4,
    name: "Funky",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Funky.png?raw=true",
  },
  {
    id: 5,
    name: "Groovy",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Groovy.png?raw=true",
  },
  {
    id: 6,
    name: "Disco",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Disco.png?raw=true",
  },
  {
    id: 7,
    name: "Punk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Punk.png?raw=true",
  },
  {
    id: 8,
    name: "Post-Punk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Post-Punk.png?raw=true",
  },
  {
    id: 9,
    name: "Folk Punk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Folk_Punk.png?raw=true",
  },
  {
    id: 10,
    name: "Rave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rave.png?raw=true",
  },
  {
    id: 11,
    name: "Vaporwave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Vaporwave.png?raw=true",
  },
  {
    id: 12,
    name: "Synthwave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Synthwave.png?raw=true",
  },
  {
    id: 13,
    name: "Chillwave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chillwave.png?raw=true",
  },
  {
    id: 14,
    name: "Hypnagogic Pop",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hypnagogic_Pop.png?raw=true",
  },
  {
    id: 15,
    name: "Hyperpop",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hyperpop.png?raw=true",
  },
  {
    id: 16,
    name: "K-Pop",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/K-Pop.png?raw=true",
  },
  {
    id: 17,
    name: "Tenwave",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tenwave.png?raw=true",
  },
  {
    id: 18,
    name: "Bardcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bardcore.png?raw=true",
  },
  {
    id: 19,
    name: "Breakcore",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Breakcore.png?raw=true",
  },
  {
    id: 20,
    name: "Cargopunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cargopunk.png?raw=true",
  },
  {
    id: 21,
    name: "Shpongle",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Shpongle.png?raw=true",
  },
  {
    id: 22,
    name: "In The Style of Shpongle",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/In_The_Style_of_Shpongle.png?raw=true",
  },
];



const Music = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Music Styles
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
                <Image
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

export default Music;
