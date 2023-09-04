import React from "react";
import { useState } from "react";
import Image from "next/image";

const categories = [
    {
      id: 1,
      name: "Simple",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Simple.webp?raw=true",
      alt: "Simple",
    },
    {
      id: 2,
      name: "Simplicity",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Simplicity.webp?raw=true",
      alt: "Simplicity",
    },
    {
      id: 3,
      name: "Basic",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Basic.webp?raw=true",
      alt: "Basic",
    },
    {
      id: 4,
      name: "Details",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Details.webp?raw=true",
      alt: "Details",
    },
    {
      id: 5,
      name: "Detailed",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Detailed.webp?raw=true",
      alt: "Detailed",
    },
    {
      id: 6,
      name: "Hyperdetailed",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hyperdetailed.webp?raw=true",
      alt: "Hyperdetailed",
    },
    {
      id: 7,
      name: "Ornate",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ornate.webp?raw=true",
      alt: "Ornate",
    },
    {
      id: 8,
      name: "Complex",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Complex.webp?raw=true",
      alt: "Complex",
    },
    {
      id: 9,
      name: "Complexity",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Complexity.webp?raw=true",
      alt: "Complexity",
    },
    {
      id: 10,
      name: "Multiplex",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Multiplex.webp?raw=true",
      alt: "Multiplex",
    },
    {
      id: 11,
      name: "Kolmogorov Complexity",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Kolmogorov_Complexity.webp?raw=true",
      alt: "Kolmogorov Complexity",
    },
    {
      id: 12,
      name: "Cluttered",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cluttered.webp?raw=true",
      alt: "Cluttered",
    },
    {
      id: 13,
      name: "Greeble",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greeble.webp?raw=true",
      alt: "Greeble",
    },
    {
      id: 14,
      name: "Chaotic",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chaotic.webp?raw=true",
      alt: "Chaotic",
    },
    {
      id: 15,
      name: "Confusing",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Confusing.webp?raw=true",
      alt: "Confusing",
    },
    {
      id: 16,
      name: "Incoherent",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Incoherent.webp?raw=true",
      alt: "Incoherent",
    },
    {
      id: 17,
      name: "Intricate",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intricate.webp?raw=true",
      alt: "Intricate",
    },
    {
      id: 18,
      name: "Surface Detail",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Surface_Detail.webp?raw=true",
      alt: "Surface Detail",
    },
    {
      id: 19,
      name: "Intricate Surface Detail",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intricate_Surface_Detail.webp?raw=true",
      alt: "Intricate Surface Detail",
    },
    {
      id: 20,
      name: "Minimalist",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Minimalist.webp?raw=true",
      alt: "Minimalist",
    },
    {
      id: 21,
      name: "Maximalist",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Maximalist.webp?raw=true",
      alt: "Maximalist",
    },
    {
      id: 22,
      name: "Intricate Maximalism",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intricate_Maximalism.webp?raw=true",
      alt: "Intricate Maximalism",
    },
    {
      id: 23,
      name: "Flat",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Flat.webp?raw=true",
      alt: "Flat",
    },
    {
      id: 24,
      name: "Flat Design",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Flat_Design.webp?raw=true",
      alt: "Flat Design",
    },
    {
      id: 25,
      name: "Ukiyo-e Flat Design",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ukiyo-e_Flat_Design.webp?raw=true",
      alt: "Ukiyo-e Flat Design",
    },
    {
      id: 26,
      name: "Isotype",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Isotype.webp?raw=true",
      alt: "Isotype",
    },
    {
      id: 27,
      name: "Flat Shading",
      image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Flat_Shading.webp?raw=true",
      alt: "Flat Shading",
    },
  ];

const Simplicity = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  return (
    <body>
      <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">Simplicity/Complexity</summary>
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

export default Simplicity;
