import React from "react";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Peace Symbol",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Peace_Symbol.webp?raw=true",
  },
  {
    id: 2,
    name: "Yin Yang",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Yin_Yang.webp?raw=true",
  },
  {
    id: 3,
    name: "Infinity Symbol",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Infinity_Symbol.webp?raw=true",
  },
  {
    id: 4,
    name: "Atom Symbol",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Atom_Symbol.webp?raw=true",
  },
  {
    id: 5,
    name: "Sparkles",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Sparkles.webp?raw=true",
  },
  {
    id: 6,
    name: "High Voltage Sign",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/High_Voltage_Sign.webp?raw=true",
  },
  {
    id: 7,
    name: "Dizzy Symbol",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Dizzy_Symbol.webp?raw=true",
  },
  {
    id: 8,
    name: "Collision Symbol",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Collision_Symbol.webp?raw=true",
  },
  {
    id: 9,
    name: "Warning Sign",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Warning_Sign.webp?raw=true",
  },
  {
    id: 10,
    name: "Radioactive Sign",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Radioactive_Sign.webp?raw=true",
  },
  {
    id: 11,
    name: "Biohazard Sign",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Biohazard_Sign.webp?raw=true",
  },
  {
    id: 12,
    name: "Diamond Shape With a Dot Inside",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Diamond_Shape_With_a_Dot_Inside.webp?raw=true",
  },
  {
    id: 13,
    name: "Fleur-De-Lis",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Fleur-De-Lis.webp?raw=true",
  },
  {
    id: 14,
    name: "Musical Note",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Musical_Note.webp?raw=true",
  },
  {
    id: 15,
    name: "Multiple Musical Notes",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Multiple_Musical_Notes.webp?raw=true",
  },
  {
    id: 16,
    name: "Musical Score",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Musical_Score.webp?raw=true",
  },
  {
    id: 17,
    name: "Wavy Dash",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Wavy_Dash.webp?raw=true",
  },
  {
    id: 18,
    name: "Curly Loop",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Curly_Loop.webp?raw=true",
  },
  {
    id: 19,
    name: "Double Curly Loop",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Double_Curly_Loop.webp?raw=true",
  },
  {
    id: 20,
    name: "Heart",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Heart.webp?raw=true",
  },
  {
    id: 21,
    name: "Spade Suit",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Spade_Suit.webp?raw=true",
  },
  {
    id: 22,
    name: "Heart Suit",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Heart_Suit.webp?raw=true",
  },
  {
    id: 23,
    name: "Club Suit",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Club_Suit.webp?raw=true",
  },
  {
    id: 24,
    name: "Diamond Suit",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.6/Emojis/Symbols/Diamond_Suit.webp?raw=true",
  },
];



const Symbols = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Symbols
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
            <div className="justify-center items-center">
              {selectedCategoryId ? (
                <Image
                  className="w-96 sticky top-20"
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

export default Symbols;
