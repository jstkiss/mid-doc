import { pushRotate as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { motion } from "framer-motion";
import Dropstyles from "../../../src/components/dropstyles";
import Comparison from "../../../src/components/comparison";
import { TypingText } from "../../../src/components/CustomTexts";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../../styles";
import React from "react";
import { useEffect, useState } from "react";
import Patterns from "./patterns";
import Elegance from "./elegance";
import Charts from "./charts";
import Decade from "./decade";
import Morphism from "./morphism";
import Cubism from "./cubism";
import Expressionism from "./expressionism";
import Neo from "./neo";
import Psy from "./psychedelic";
import Synesthesia from "./synesthesia";
import Art from "./art";
import Stylized from "./stylized";
import Other from "./others";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Simple",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Simple.png?raw=true",
  },
  {
    id: 2,
    name: "Simplicity",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Simplicity.png?raw=true",
  },
  {
    id: 3,
    name: "Basic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Basic.png?raw=true",
  },
  {
    id: 4,
    name: "Details",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Details.png?raw=true",
  },
  {
    id: 5,
    name: "Detailed",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Detailed.png?raw=true",
  },
  {
    id: 6,
    name: "Hyperdetailed",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hyperdetailed.png?raw=true",
  },
  {
    id: 7,
    name: "Ornate",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ornate.png?raw=true",
  },
  {
    id: 8,
    name: "Complex",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Complex.png?raw=true",
  },
  {
    id: 9,
    name: "Complexity	",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Complexity.png?raw=true",
  },
  {
    id: 10,
    name: "Multiplex",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Multiplex.png?raw=true",
  },
  {
    id: 11,
    name: "Kolmogorov Complexity",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Kolmogorov_Complexity.png?raw=true",
  },
  {
    id: 12,
    name: "Cluttered",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cluttered.png?raw=true",
  },
  {
    id: 13,
    name: "Greeble",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greeble.png?raw=true",
  },
  {
    id: 14,
    name: "Chaotic",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chaotic.png?raw=true",
  },
  {
    id: 15,
    name: "Confusing",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Confusing.png?raw=true",
  },
  {
    id: 16,
    name: "Incoherent",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Incoherent.png?raw=true",
  },
  {
    id: 17,
    name: "Intricate",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intricate.png?raw=true",
  },
  {
    id: 18,
    name: "Surface Detail",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Surface_Detail.png?raw=true",
  },
  {
    id: 19,
    name: "Intricate Surface Detail",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intricate_Surface_Detail.png?raw=true",
  },
  {
    id: 20,
    name: "Minimalist",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Minimalist.png?raw=true",
  },
  {
    id: 21,
    name: "Maximalist",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Maximalist.png?raw=true",
  },
  {
    id: 22,
    name: "Intricate Maximalism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intricate_Maximalism.png?raw=true",
  },
  {
    id: 23,
    name: "Flat	",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Flat.png?raw=true",
  },
  {
    id: 24,
    name: "Flat Design",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Flat_Design.png?raw=true",
  },
  {
    id: 25,
    name: "Ukiyo-e Flat Design",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ukiyo-e_Flat_Design.png?raw=true",
  },
  {
    id: 26,
    name: "Flat Shading",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Flat_Shading.png?raw=true",
  },
];

const Themes = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <body className="customblack">
      <div className="lg:grid lg:grid-cols-2 lg:h-40">
        <div className="lg:hidden">
          <Menu>
            <div className="grid grid-rows-5">
              <div>
                <AnchorLink href="#">Accueil</AnchorLink>
              </div>
              <div>
                <AnchorLink href="#">Styles</AnchorLink>
              </div>
              <div>
                <AnchorLink href="#">Comparison Pages</AnchorLink>
              </div>
              <div>
                <AnchorLink href="#">blabla</AnchorLink>
              </div>
            </div>
          </Menu>
        </div>
        <motion.div className="lg:col-start-2 lg:flex hidden lg:items-center lg:justify-center">
          <nav className="text-white">
            <ul className="lg:flex">
              <li>
                <AnchorLink
                  href="#home"
                  className="hover:scale-125 hover:ease-in"
                >
                  Accueil
                </AnchorLink>
              </li>
              <li>
                <Dropstyles />
              </li>
              <li>
                <Comparison />
              </li>
              <li className="lg:pl-5">
                <AnchorLink
                  href="#contact"
                  className="hover:scale-125 hover:ease-in"
                >
                  blabla
                </AnchorLink>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>
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
                <span className="text-customyello">Design</span>
              </h1>
              <hr className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="mt-20 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
            Simplicity/Complexity
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
      <Patterns />
      <Elegance />
      <Charts />
      <Decade />
      <Morphism />
      <Cubism />
      <Expressionism />
      <Neo />
      <Psy />
      <Synesthesia />
      <Art />
      <Stylized />
      <Other />
      <section class="bg-customblack">
        <div class="max-w-lg bg-customblack px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 class="text-3xl font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none md:text-6xl first-letter:lg:text-7xl">
            <span class="inline md:block">Join Us</span>
            <span class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-emerald-400 to-blue-500 md:inline-block">
              {" "}
              More
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-yellow-300">
                {" "}
                Info
              </span>{" "}
            </span>
          </h1>
          <div class="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg grid grid-cols-2">
            <div>
              <button class="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
                Join Discord
              </button>
            </div>
            <div>
              <button class="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
                Join Twitter
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr class="text-white mx-5" />
      <footer class="bg-customblack pb-5">
        <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-customblue sm:justify-start">
              <img class="rounded-full" src="" width="40" height="40" />
            </div>

            <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Themes;
