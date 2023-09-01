import { pushRotate as Menu } from "react-burger-menu";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../../styles";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Header from "../../../src/components/header";
import Realism from "./realism";
import Retro from "./retro";
import Scifi from "./scifi";

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
      <section className="grid grid-cols-2 grid-rows-7">
        <div className="pl-5 pr-5 flex justify-center">
          <details className="border-0 rounded">
            <summary className="text-white">Themes</summary>
            <Realism />
            <Retro />
            <Scifi />
          </details>
        </div>
        <div className="pl-5 pr-5 flex justify-center">
          <details className="border-0 rounded">
            <summary className="text-white">Design</summary>
            <Realism />
            <Retro />
            <Scifi />
          </details>
        </div>
      </section>
      <section className="mt-52">
      <Realism />
      <Retro />
      <Scifi />
      </section>
      {/* <Atmosphere />
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
