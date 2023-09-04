import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";



const categories = [
  {
    id: 1,
    name: "Dark Atmosphere",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Dark_Atmosphere.webp?raw=true",
  },
  {
    id: 2,
    name: "Light Atmosphere",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Light_Atmosphere.webp?raw=true",
  },
  {
    id: 3,
    name: "Reflective Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Reflective_Atmosphere.webp?raw=true",
  },
  {
    id: 4,
    name: "Hazy Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Hazy_Atmosphere.webp?raw=true",
  },
  {
    id: 5,
    name: "Enchanting Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Enchanting_Atmosphere.webp?raw=true",
  },
  {
    id: 6,
    name: "Dreamy Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Dreamy_Atmosphere.webp?raw=true",
  },
  {
    id: 7,
    name: "Mystical Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Mystical_Atmosphere.webp?raw=true",
  },
  {
    id: 8,
    name: "Ethereal Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Ethereal_Atmosphere.webp?raw=true",
  },
  {
    id: 9,
    name: "Playful Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Playful_Atmosphere.webp?raw=true",
  },
  {
    id: 10,
    name: "Whimsical Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Whimsical_Atmosphere.webp?raw=true",
  },
  {
    id: 11,
    name: "Serendipitous Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Serendipitous_Atmosphere.webp?raw=true",
  },
  {
    id: 12,
    name: "Mysterious Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Mysterious_Atmosphere.webp?raw=true",
  },
  {
    id: 13,
    name: "Sophisticated Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Sophisticated_Atmosphere.webp?raw=true",
  },
  {
    id: 14,
    name: "Enigmatic Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Enigmatic_Atmosphere.webp?raw=true",
  },
  {
    id: 15,
    name: "Mellow Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Mellow_Atmosphere.webp?raw=true",
  },
  {
    id: 16,
    name: "Calm Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Calm_Atmosphere.webp?raw=true",
  },
  {
    id: 17,
    name: "Tranquil Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Tranquil_Atmosphere.webp?raw=true",
  },
  {
    id: 18,
    name: "Chill Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Chill_Atmosphere.webp?raw=true",
  },
  {
    id: 19,
    name: "Relaxing Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Relaxing_Atmosphere.webp?raw=true",
  },
  {
    id: 20,
    name: "Peaceful Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Peaceful_Atmosphere.webp?raw=true",
  },
  {
    id: 21,
    name: "Blissful Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Blissful_Atmosphere.webp?raw=true",
  },
  {
    id: 22,
    name: "Serene Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Serene_Atmosphere.webp?raw=true",
  },
  {
    id: 23,
    name: "Zen Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Zen_Atmosphere.webp?raw=true",
  },
  {
    id: 24,
    name: "Moody Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Moody_Atmosphere.webp?raw=true",
  },
  {
    id: 25,
    name: "Intense Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Intense_Atmosphere.webp?raw=true",
  },
  {
    id: 26,
    name: "Melancholic Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Melancholic_Atmosphere.webp?raw=true",
  },
  {
    id: 27,
    name: "Nostalgic Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Nostalgic_Atmosphere.webp?raw=true",
  },
  {
    id: 28,
    name: "Festive Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Festive_Atmosphere.webp?raw=true",
  },
  {
    id: 29,
    name: "Industrial Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Industrial_Atmosphere.webp?raw=true",
  },
  {
    id: 30,
    name: "Rustic Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Rustic_Atmosphere.webp?raw=true",
  },
  {
    id: 31,
    name: "Gothic Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Gothic_Atmosphere.webp?raw=true",
  },
  {
    id: 32,
    name: "Romantic Atmosphere",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.7/Midjourney_Styles/Romantic_Atmosphere.webp?raw=true",
  },
];



const Atmosphere = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    return (
      <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
            Atmosphere
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

export default Atmosphere;
