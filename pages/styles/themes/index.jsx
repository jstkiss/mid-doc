import { pushRotate as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { motion } from "framer-motion";
import Dropstyles from "../../../src/components/dropstyles";
import Comparison from "../../../src/components/comparison";
import { TypingText } from "../../../src/components/CustomTexts";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../../styles";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import Retro from "./retro";
import Scifi from "./scifi";
import Outer from "./outer";
import Planets from "./planets";
import Countries from "./countries";
import Urban from "./urban";
import Rooms from "./rooms";
import Architecture from "./architecture";
import Biomes from "./biomes";
import Nature from "./nature";
import Seasons from "./seasons";
import Holidays from "./holidays";
import Professions from "./professions";
import Times from "./time";
import Music from "./music";
import Cartoons from "./cartoons";
import Colors from "./colors";
import Mood from "./mood";
import Other from "./other";

const categories = [
  {
    id: 1,
    name: "",
    image: "",
  },
  {
    id: 2,
    name: "",
    image: "",
  },
  {
    id: 3,
    name: "",
    image: "",
  },
  {
    id: 4,
    name: "",
    image: "",
  },
  {
    id: 5,
    name: "",
    image: "",
  },
  {
    id: 6,
    name: "",
    image: "",
  },
  {
    id: 7,
    name: "",
    image: "",
  },
  {
    id: 8,
    name: "",
    image: "",
  },
  {
    id: 9,
    name: "",
    image: "",
  },
  {
    id: 10,
    name: "",
    image: "",
  },
  {
    id: 11,
    name: "",
    image: "",
  },
  {
    id: 12,
    name: "",
    image: "",
  },
  {
    id: 13,
    name: "",
    image: "",
  },
  {
    id: 14,
    name: "",
    image: "",
  },
  {
    id: 15,
    name: "",
    image: "",
  },
  {
    id: 16,
    name: "",
    image: "",
  },
  {
    id: 17,
    name: "",
    image: "",
  },
  {
    id: 18,
    name: "",
    image: "",
  },
  {
    id: 19,
    name: "",
    image: "",
  },
  {
    id: 20,
    name: "",
    image: "",
  },
  {
    id: 21,
    name: "",
    image: "",
  },
  {
    id: 22,
    name: "",
    image: "",
  },
  {
    id: 23,
    name: "",
    image: "",
  },
  {
    id: 24,
    name: "",
    image: "",
  },
  {
    id: 25,
    name: "",
    image: "",
  },
  {
    id: 26,
    name: "",
    image: "",
  },
  {
    id: 27,
    name: "",
    image: "",
  },
  {
    id: 28,
    name: "",
    image: "",
  },
  {
    id: 29,
    name: "",
    image: "",
  },
  {
    id: 30,
    name: "",
    image: "",
  },
  {
    id: 31,
    name: "",
    image: "",
  },
  {
    id: 32,
    name: "",
    image: "",
  },
  {
    id: 33,
    name: "",
    image: "",
  },
  {
    id: 34,
    name: "",
    image: "",
  },
  {
    id: 35,
    name: "",
    image: "",
  },
  {
    id: 36,
    name: "",
    image: "",
  },
  {
    id: 37,
    name: "",
    image: "",
  },
  {
    id: 38,
    name: "",
    image: "",
  },
  {
    id: 39,
    name: "",
    image: "",
  },
  {
    id: 40,
    name: "",
    image: "",
  },
  {
    id: 41,
    name: "",
    image: "",
  },
  {
    id: 42,
    name: "",
    image: "",
  },
  {
    id: 43,
    name: "",
    image: "",
  },
  {
    id: 44,
    name: "",
    image: "",
  },
  {
    id: 45,
    name: "",
    image: "",
  },
  {
    id: 46,
    name: "",
    image: "",
  },
  {
    id: 47,
    name: "",
    image: "",
  },
  {
    id: 48,
    name: "",
    image: "",
  },
  {
    id: 49,
    name: "",
    image: "",
  },
  {
    id: 50,
    name: "",
    image: "",
  },
  {
    id: 51,
    name: "",
    image: "",
  },
  {
    id: 52,
    name: "",
    image: "",
  },
  {
    id: 53,
    name: "",
    image: "",
  },
  {
    id: 54,
    name: "",
    image: "",
  },
  {
    id: 56,
    name: "",
    image: "",
  },
  {
    id: 57,
    name: "",
    image: "",
  },
  {
    id: 58,
    name: "",
    image: "",
  },
  {
    id: 59,
    name: "",
    image: "",
  },
  {
    id: 60,
    name: "",
    image: "",
  },
  {
    id: 61,
    name: "",
    image: "",
  },
  {
    id: 62,
    name: "",
    image: "",
  },
  {
    id: 63,
    name: "",
    image: "",
  },
  {
    id: 64,
    name: "",
    image: "",
  },
  {
    id: 65,
    name: "",
    image: "",
  },
  {
    id: 67,
    name: "",
    image: "",
  },
  {
    id: 68,
    name: "",
    image: "",
  },
  {
    id: 68,
    name: "",
    image: "",
  },
  {
    id: 69,
    name: "",
    image: "",
  },
  {
    id: 70,
    name: "",
    image: "",
  },
  {
    id: 71,
    name: "",
    image: "",
  },
  {
    id: 72,
    name: "",
    image: "",
  },
  {
    id: 73,
    name: "",
    image: "",
  },
  {
    id: 74,
    name: "",
    image: "",
  },
  {
    id: 75,
    name: "",
    image: "",
  },
  {
    id: 76,
    name: "",
    image: "",
  },
  {
    id: 77,
    name: "",
    image: "",
  },
  {
    id: 78,
    name: "",
    image: "",
  },
  {
    id: 79,
    name: "",
    image: "",
  },
  {
    id: 80,
    name: "",
    image: "",
  },
  {
    id: 81,
    name: "",
    image: "",
  },
  {
    id: 82,
    name: "",
    image: "",
  },
  {
    id: 83,
    name: "",
    image: "",
  },
  {
    id: 84,
    name: "",
    image: "",
  },
  {
    id: 85,
    name: "",
    image: "",
  },
  {
    id: 86,
    name: "",
    image: "",
  },
  {
    id: 87,
    name: "",
    image: "",
  },
  {
    id: 88,
    name: "",
    image: "",
  },
  {
    id: 89,
    name: "",
    image: "",
  },
  {
    id: 90,
    name: "",
    image: "",
  },
  {
    id: 91,
    name: "",
    image: "",
  },
  {
    id: 92,
    name: "",
    image: "",
  },
  {
    id: 93,
    name: "",
    image: "",
  },
  {
    id: 94,
    name: "",
    image: "",
  },
  {
    id: 95,
    name: "",
    image: "",
  },
];

const Design = () => {
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
                <span className="text-customyello">Thèmes</span>
              </h1>
              <hr className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText
            title=" About Midjourney"
            textStyles="text-center text-white"
          />
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-2 font-normal sm:text-2xl text-center text-secondary-white text-white"
          >
            <span className="font-extrabold"> JSTKiss </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero in
            maiores expedita animi! Earum ea neque maiores ipsam numquam
            aliquam, id esse odit consequatur maxime molestiae nobis ratione.
            Repudiandae, enim.
            <span className="font-extrabold"> blablalblalblalb </span>
            blalblalblal
            <span className="font-extrabold"> blalblall </span>
            blalblalfll
            <span className="font-extrabold"> blalblalblal </span>
            blablalblalbl
          </motion.p>
          <motion.img
            variants={fadeIn("up", "tween", 0.3, 1)}
            src="../../public/arrow.svg"
            alt="arrow-donw"
            className="w-4 h-7 object-contain mt-7"
          ></motion.img>
        </motion.div>
      </section> */}
      <section className="mt-20 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
            Realiste/Abstrait
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
      <Retro />
      <Scifi />
      <Outer />
      <Planets />
      <Countries />
      <Urban />
      <Rooms />
      <Architecture />
      <Biomes />
      <Nature />
      <Seasons />
      <Holidays />
      <Professions />
      <Times />
      <Music />
      <Cartoons />
      <Colors />
      <Mood />
      <Other />
    </body>
  );
};

export default Design;
