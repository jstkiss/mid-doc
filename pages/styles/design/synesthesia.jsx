import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Synesthesia.png?raw=true",
  },
  {
    id: 2,
    name: "Synesthetic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Synesthetic.png?raw=true",
  },
  {
    id: 3,
    name: "Chromesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chromesthesia.png?raw=true",
  },
  {
    id: 4,
    name: "Music-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Music-Color_Synesthesia.png?raw=true",
  },
  {
    id: 5,
    name: "Musical-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Musical-Color_Synesthesia.png?raw=true",
  },
  {
    id: 6,
    name: "Music-Vision Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Music-Vision_Synesthesia.png?raw=true",
  },
  {
    id: 7,
    name: "Musical-Texture Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Musical-Texture_Synesthesia.png?raw=true",
  },
  {
    id: 8,
    name: "Chords-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chords-Color_Synesthesia.png?raw=true",
  },
  {
    id: 9,
    name: "Musical-Spatial Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Musical-Spatial_Synesthesia.png?raw=true",
  },
  {
    id: 10,
    name: "Music-Number Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Music-Number_Synesthesia.png?raw=true",
  },
  {
    id: 11,
    name: "Music-Temperature Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Music-Temperature_Synesthesia.png?raw=true",
  },
  {
    id: 12,
    name: "Music-Smell Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Music-Smell_Synesthesia.png?raw=true",
  },
  {
    id: 13,
    name: "Music-Taste Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Music-Taste_Synesthesia.png?raw=true",
  },
  {
    id: 14,
    name: "Auditory-Visual Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Auditory-Visual_Synesthesia.png?raw=true",
  },
  {
    id: 15,
    name: "Auditory-Tactile Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Auditory-Tactile_Synesthesia.png?raw=true",
  },
  {
    id: 16,
    name: "Auditory-Gustatory Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Auditory-Gustatory_Synesthesia.png?raw=true",
  },
  {
    id: 17,
    name: "Sound-Texture Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Texture_Synesthesia.png?raw=true",
  },
  {
    id: 18,
    name: "Sound-Tactile Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Tactile_Synesthesia.png?raw=true",
  },
  {
    id: 19,
    name: "Sound-Touch Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Touch_Synesthesia.png?raw=true",
  },
  {
    id: 20,
    name: "Sound-Shape Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Shape_Synesthesia.png?raw=true",
  },
  {
    id: 21,
    name: "Sound-Number Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Number_Synesthesia.png?raw=true",
  },
  {
    id: 22,
    name: "Sound-Kinetics Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Kinetics_Synesthesia.png?raw=true",
  },
  {
    id: 23,
    name: "Sound-Temperature Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Temperature_Synesthesia.png?raw=true",
  },
  {
    id: 24,
    name: "Sound-Smell Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Smell_Synesthesia.png?raw=true",
  },
  {
    id: 25,
    name: "Sound-Taste Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sound-Taste_Synesthesia.png?raw=true",
  },
  {
    id: 26,
    name: "Aura Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Aura_Synesthesia.png?raw=true",
  },
  {
    id: 27,
    name: "Personality-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Personality-Color_Synesthesia.png?raw=true",
  },
  {
    id: 28,
    name: "Emotion-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Emotion-Color_Synesthesia.png?raw=true",
  },
  {
    id: 29,
    name: "Concepts-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Concepts-Color_Synesthesia.png?raw=true",
  },
  {
    id: 30,
    name: "Concepts-Shape Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Concepts-Shape_Synesthesia.png?raw=true",
  },
  {
    id: 31,
    name: "Concept-Sound Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Concept-Sound_Synesthesia.png?raw=true",
  },
  {
    id: 32,
    name: "Concept-Smell Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Concept-Smell_Synesthesia.png?raw=true",
  },
  {
    id: 33,
    name: "Mathematical Concepts-Visual Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mathematical_Concepts-Visual_Synesthesia.png?raw=true",
  },
  {
    id: 34,
    name: "Spatial-Sequence Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Spatial-Sequence_Synesthesia.png?raw=true",
  },
  {
    id: 35,
    name: "Number-Form Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Number-Form_Synesthesia.png?raw=true",
  },
  {
    id: 36,
    name: "Gustatory-Visual Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Gustatory-Visual_Synesthesia.png?raw=true",
  },
  {
    id: 37,
    name: "Gustatory-Auditory Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Gustatory-Auditory_Synesthesia.png?raw=true",
  },
  {
    id: 38,
    name: "Gustatory-Tactile Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Gustatory-Tactile_Synesthesia.png?raw=true",
  },
  {
    id: 39,
    name: "Olfactory-Visual Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Olfactory-Visual_Synesthesia.png?raw=true",
  },
  {
    id: 40,
    name: "Kinetics-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Kinetics-Color_Synesthesia.png?raw=true",
  },
  {
    id: 41,
    name: "Grapheme-Shape Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Shape_Synesthesia.png?raw=true",
  },
  {
    id: 42,
    name: "Grapheme-Texture Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Texture_Synesthesia.png?raw=true",
  },
  {
    id: 43,
    name: "Grapheme-Image Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Image_Synesthesia.png?raw=true",
  },
  {
    id: 44,
    name: "Grapheme-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Color_Synesthesia.png?raw=true",
  },
  {
    id: 45,
    name: "Grapheme-Sound Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Sound_Synesthesia.png?raw=true",
  },
  {
    id: 46,
    name: "Grapheme-Temperature Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Temperature_Synesthesia.png?raw=true",
  },
  {
    id: 47,
    name: "Grapheme-Smell Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Smell_Synesthesia.png?raw=true",
  },
  {
    id: 48,
    name: "Grapheme-Taste Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grapheme-Taste_Synesthesia.png?raw=true",
  },
  {
    id: 49,
    name: "Lexeme-Olfactory Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lexeme-Olfactory_Synesthesia.png?raw=true",
  },
  {
    id: 50,
    name: "Lexeme-Taste Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lexeme-Taste_Synesthesia.png?raw=true",
  },
  {
    id: 51,
    name: "Lexical-Gustatory Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lexical-Gustatory_Synesthesia.png?raw=true",
  },
  {
    id: 52,
    name: "Lexeme-Motor Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lexeme-Motor_Synesthesia.png?raw=true",
  },
  {
    id: 53,
    name: "Lexeme-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lexeme-Color_Synesthesia.png?raw=true",
  },
  {
    id: 54,
    name: "Morpheme-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Morpheme-Color_Synesthesia.png?raw=true",
  },
  {
    id: 56,
    name: "Words-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Words-Color_Synesthesia.png?raw=true",
  },
  {
    id: 57,
    name: "Letter-Color Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Color_Synesthesia.png?raw=true",
  },
  {
    id: 58,
    name: "Letter-Shape Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Shape_Synesthesia.png?raw=true",
  },
  {
    id: 59,
    name: "Letter-Texture Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Texture_Synesthesia.png?raw=true",
  },
  {
    id: 60,
    name: "Letter-Image Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Image_Synesthesia.png?raw=true",
  },
  {
    id: 61,
    name: "Letter-Personality Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Personality_Synesthesia.png?raw=true",
  },
  {
    id: 62,
    name: "Letter-Smell Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Smell_Synesthesia.png?raw=true",
  },
  {
    id: 63,
    name: "Letter-Taste Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Taste_Synesthesia.png?raw=true",
  },
  {
    id: 64,
    name: "Letter-Sound Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Sound_Synesthesia.png?raw=true",
  },
  {
    id: 65,
    name: "Letter-Spatial Location Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Spatial_Location_Synesthesia.png?raw=true",
  },
  {
    id: 66,
    name: "Letter-Temperature Synesthesia",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Letter-Temperature_Synesthesia.png?raw=true",
  },
];

const Synesthesia = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
      <details className="cursor-pointer">
        <summary className="cursor-pointer text-customyello">
          Synesthesia
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
          <div className="flex justify-center items-center">
            {selectedCategoryId ? (
              <Image
                className="w-96"
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
                width={"100%"}
                height={"100%"}
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

export default Synesthesia;
