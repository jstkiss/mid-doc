import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
const categories = [
  {
    id: 1,
    name: "Elegant",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Elegant.webp?raw=true",
    alt: "Elegant",
  },
  {
    id: 2,
    name: "Elegance",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Elegance.webp?raw=true",
    alt: "Elegance",
  },
  {
    id: 3,
    name: "Beauty",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Beauty.webp?raw=true",
    alt: "Beauty",
  },
  {
    id: 4,
    name: "Beautiful",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Beautiful.webp?raw=true",
    alt: "Beautiful",
  },
  {
    id: 5,
    name: "Appeal",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Appeal.webp?raw=true",
    alt: "Appeal",
  },
  {
    id: 6,
    name: "Appealing",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Appealing.webp?raw=true",
    alt: "Appealing",
  },
  {
    id: 7,
    name: "Marvelous",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Marvelous.webp?raw=true",
    alt: "Marvelous",
  },
  {
    id: 8,
    name: "Luxury",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Luxury.webp?raw=true",
    alt: "Luxury",
  },
  {
    id: 9,
    name: "Luxurious",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Luxurious.webp?raw=true",
    alt: "Luxurious",
  },
  {
    id: 10,
    name: "Luxe",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Luxe.webp?raw=true",
    alt: "Luxe",
  },
  {
    id: 11,
    name: "Low-Quality",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Low-Quality.webp?raw=true",
    alt: "Low-Quality",
  },
  {
    id: 12,
    name: "Medium-Quality",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Medium-Quality.webp?raw=true",
    alt: "Medium-Quality",
  },
  {
    id: 13,
    name: "High-Quality",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/High-Quality.webp?raw=true",
    alt: "High-Quality",
  },
  {
    id: 14,
    name: "Ultra-Quality",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ultra-Quality.webp?raw=true",
    alt: "Ultra-Quality",
  },
  {
    id: 15,
    name: "Ultra Quality",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ultra_Quality.webp?raw=true",
    alt: "Perfection",
  },
  {
    id: 16,
    name: "Perfection",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Perfection.webp?raw=true",
    alt: "Perfection",
  },
];

const Elegance = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  return (
    <body>
      <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">Elegance, Beauty, and Appeal</summary>
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
    </body>
  );
};

export default Elegance;
