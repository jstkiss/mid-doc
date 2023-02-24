import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Planet",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet.png?raw=true",
  },
  {
    id: 2,
    name: "Planets",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planets.png?raw=true",
  },
  {
    id: 3,
    name: "Planetary",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planetary.png?raw=true",
  },
  {
    id: 4,
    name: "Planet Mercury",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Mercury.png?raw=true",
  },
  {
    id: 5,
    name: "Planet Venus",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Venus.png?raw=true",
  },
  {
    id: 6,
    name: "Earth",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Earth.png?raw=true",
  },
  {
    id: 7,
    name: "Planet Earth",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Earth.png?raw=true",
  },
  {
    id: 8,
    name: "Global",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Global.png?raw=true",
  },
  {
    id: 9,
    name: "Mars",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mars.png?raw=true",
  },
  {
    id: 10,
    name: "Planet Mars",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Mars.png?raw=true",
  },
  {
    id: 11,
    name: "Saturn",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Saturn.png?raw=true",
  },
  {
    id: 12,
    name: "Planet Saturn",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Saturn.png?raw=true",
  },
  {
    id: 13,
    name: "Uranus",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Uranus.png?raw=true",
  },
  {
    id: 14,
    name: "Planet Uranus",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Uranus.png?raw=true",
  },
  {
    id: 15,
    name: "Neptune",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Neptune.png?raw=true",
  },
  {
    id: 16,
    name: "Planet Neptune",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Neptune.png?raw=true",
  },
  {
    id: 17,
    name: "Pluto",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pluto.png?raw=true",
  },
  {
    id: 18,
    name: "Planet Pluto",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Planet_Pluto.png?raw=true",
  },
  {
    id: 19,
    name: "Sun",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sun.png?raw=true",
  },
  {
    id: 20,
    name: "Asteroid",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Asteroid.png?raw=true",
  },
];

const Planets = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Planets and Celestial Bodies
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

export default Planets;
