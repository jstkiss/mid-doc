import { pushRotate as Menu } from "react-burger-menu";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../../styles";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Header from "../../../src/components/header";

const categories = [
  {
    id: 1,
    name: "Realistic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Realistic.webp?raw=true",
    alt: "image-real",
  },
  {
    id: 2,
    name: "Hyperrealistic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hyperrealistic.webp?raw=true",
    alt: "image-hyper",
  },
  {
    id: 3,
    name: "Hyper Real",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hyper_Real.webp?raw=true",
  },
  {
    id: 4,
    name: "Photorealistic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Photorealistic.webp?raw=true",
  },
  {
    id: 5,
    name: "Photorealism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Photorealism.webp?raw=true",
  },
  {
    id: 6,
    name: "Realism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Realism.webp?raw=true",
  },
  {
    id: 7,
    name: "Magic Realism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Magic_Realism.webp?raw=true",
  },
  {
    id: 8,
    name: "Fantastic Realism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fantastic_Realism.webp?raw=true",
  },
  {
    id: 9,
    name: "Classical Realism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Classical_Realism.webp?raw=true",
  },
  {
    id: 10,
    name: "New Realism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/New_Realism.webp?raw=true",
  },
  {
    id: 11,
    name: "Contemporary Realism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Contemporary_Realism.webp?raw=true",
  },
  {
    id: 12,
    name: "Surreal",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Surreal.webp?raw=true",
  },
  {
    id: 13,
    name: "Surrealism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Surrealism.webp?raw=true",
  },
  {
    id: 14,
    name: "Unrealistic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Unrealistic.webp?raw=true",
  },
  {
    id: 15,
    name: "Imagined",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Imagined.webp?raw=true",
  },
  {
    id: 16,
    name: "Imaginative",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Imaginative.webp?raw=true",
  },
  {
    id: 17,
    name: "Imagination",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Imagination.webp?raw=true",
  },
  {
    id: 18,
    name: "Dreamlike",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dreamlike.webp?raw=true",
  },
  {
    id: 19,
    name: "Dreamy",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dreamy.webp?raw=true",
  },
  {
    id: 20,
    name: "Fever-Dream",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fever-Dream.webp?raw=true",
  },
  {
    id: 21,
    name: "Dreampunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dreampunk.webp?raw=true",
  },
  {
    id: 22,
    name: "Daydreampunk",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Daydreampunk.webp?raw=true",
  },
  {
    id: 23,
    name: "Dreamcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dreamcore.webp?raw=true",
  },
  {
    id: 24,
    name: "Weirdcore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Weirdcore.webp?raw=true",
  },
  {
    id: 25,
    name: "Worldly",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Worldly.webp?raw=true",
  },
  {
    id: 26,
    name: "Otherworldly",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Otherworldly.webp?raw=true",
  },
  {
    id: 27,
    name: "Unworldly",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Unworldly.webp?raw=true",
  },
  {
    id: 28,
    name: "From Another Realm",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/From_Another_Realm.webp?raw=true",
  },
  {
    id: 29,
    name: "Wonderland",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Wonderland.webp?raw=true",
  },
  {
    id: 30,
    name: "Lucid",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lucid.webp?raw=true",
  },
  {
    id: 31,
    name: "Ethereal",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ethereal.webp?raw=true",
  },
  {
    id: 32,
    name: "Anemoiacore",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Anemoiacore.webp?raw=true",
  },
  {
    id: 33,
    name: "Déjà vu",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Deja_vu.webp?raw=true",
  },
  {
    id: 34,
    name: "Abstract",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Abstract.webp?raw=true",
  },
  {
    id: 35,
    name: "Abstraction",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Abstraction.webp?raw=true",
  },
  {
    id: 36,
    name: "Lyrical Abstraction",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lyrical_Abstraction.webp?raw=true",
  },
  {
    id: 37,
    name: "Fantasy",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fantasy.webp?raw=true",
  },
  {
    id: 38,
    name: "Ethereal Fantasy",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ethereal_Fantasy.webp?raw=true",
  },
  {
    id: 39,
    name: "Dark Fantasy",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dark_Fantasy.webp?raw=true",
  },
  {
    id: 40,
    name: "Fantasy Map",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fantasy_Map.webp?raw=true",
  },
  {
    id: 41,
    name: "Illusion",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Illusion.webp?raw=true",
  },
  {
    id: 42,
    name: "Impossible",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Impossible.webp?raw=true",
  },
  {
    id: 43,
    name: "Nonsense",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nonsense.webp?raw=true",
  },
  {
    id: 44,
    name: "Immaterial",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Immaterial.webp?raw=true",
  },
  {
    id: 45,
    name: "Intangible",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intangible.webp?raw=true",
  },
  {
    id: 46,
    name: "Visual Rhetoric",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Visual_Rhetoric.webp?raw=true",
  },
  {
    id: 47,
    name: "Visual Exaggeration",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Visual_Exaggeration.webp?raw=true",
  },
  {
    id: 48,
    name: "Exaggerated",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Exaggerated.webp?raw=true",
  },
  {
    id: 49,
    name: "Exaggeration",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Exaggeration.webp?raw=true",
  },
];

const Design = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <body className="customblack">
      <Header />
      <section
        className={`${styles.yPaddings} sm:pl-16 pl-7 pr-4 pt-32 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36 lg:text-7xl text-3xl`}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="flex justify-center items-center flex-col relative z-10">
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.heroHeading}
            >
              Bienvenue sur
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row justify-center items-center"
            >
              <h1 className={styles.heroHeading}>La Doc-</h1>
              <div className={styles.heroDText} />
              <h1 className={styles.heroHeading}>
                {" "}
                <span className="text-customyello">Thèmes</span>
              </h1>
              <hr className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="mt-20 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
            Realism/Abstraction
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
                  width="431"
                  height="431"
                />
              ) : (
                <p className="text-white">Sélectionnez une catégorie</p>
              )}
            </div>
          </section>
        </details>
      </section>
      {/* <Retro />
      <Scifi />
      <Atmosphere />
      <Rooms />
      <Architecture />
      <Music />
      <Cartoons />
      <Colors />
      <Mood />
      <Other /> */}
    </body>
  );
};

export default Design;
