import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
const categories = [
  {
    id: 1,
    name: "Patterns",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Patterns.webp?raw=true",
    alt: "Patterns",
  },
  {
    id: 2,
    name: "Polka Dot",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Polka_Dot.webp?raw=true",
    alt: "Polka Dot",
  },
  {
    id: 3,
    name: "Pinstripe",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pinstripe.webp?raw=true",
    alt: "Pinstripe",
  },
  {
    id: 4,
    name: "Grid",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grid.webp?raw=true",
    alt: "Grid",
  },
  {
    id: 5,
    name: "Axis Lines",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Axis_Lines.webp?raw=true",
    alt: "Axis Lines",
  },
  {
    id: 6,
    name: "Checkerboard",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Checkerboard.webp?raw=true",
    alt: "Checkerboard",
  },
  {
    id: 7,
    name: "Halftone",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Halftone.webp?raw=true",
    alt: "Halftone",
  },
  {
    id: 8,
    name: "Camouflage",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Camouflage.webp?raw=true",
    alt: "Camouflage",
  },
  {
    id: 9,
    name: "Damask Patterns",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Damask_Patterns.webp?raw=true",
    alt: "Damask Patterns",
  },
  {
    id: 10,
    name: "Memphis Pattern",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Memphis_Pattern.webp?raw=true",
    alt: "Memphis Pattern",
  },
  {
    id: 11,
    name: "Parametric Patterns",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Parametric_Patterns.webp?raw=true",
    alt: "Parametric Patterns",
  },
  {
    id: 12,
    name: "Diffraction Patterns",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Diffraction_Patterns.webp?raw=true",
    alt: "Diffraction Patterns",
  },
  {
    id: 13,
    name: "Voronoi",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Voronoi.webp?raw=true",
    alt: "Voronoi",
  },
  {
    id: 14,
    name: "Zebra Pattern",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Zebra_Pattern.webp?raw=true",
    alt: "Zebra Pattern",
  },
  {
    id: 15,
    name: "Tiger Pattern",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tiger_Pattern.webp?raw=true",
    alt: "Tiger Pattern",
  },
  {
    id: 16,
    name: "Cow Pattern",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cow_Pattern.webp?raw=true",
    alt: "Cow Pattern",
  },
  {
    id: 17,
    name: "Rorschach",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rorschach.webp?raw=true",
    alt: "Rorschach",
  },
  {
    id: 18,
    name: "Girih",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Girih.webp?raw=true",
    alt: "Girih",
  },
  {
    id: 19,
    name: "Girih Patterns",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Girih_Patterns.webp?raw=true",
    alt: "Girih Patterns",
  },
  {
    id: 20,
    name: "Guilloché Patterns",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Guilloche_Patterns.webp?raw=true",
    alt: "Guilloché Patterns",
  },
  {
    id: 21,
    name: "Zellij Patterns",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Zellij_Patterns.webp?raw=true",
    alt: "Zellij Patterns",
  },
  {
    id: 22,
    name: "Celtic Maze",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Celtic_Maze.webp?raw=true",
    alt: "Celtic Maze",
  },
];

const Patterns = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  return (
    <body>
      <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">Patterns</summary>
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

export default Patterns;
