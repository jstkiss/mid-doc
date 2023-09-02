import Header from "../../../src/components/header";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../styles";
import React from "react";
import { useState } from "react";
import Realism from "./Components/realism";
import Retro from "./Components/retro";
import Scifi from "./Components/scifi";
import Atmosphere from "./Components/atmosphere"
import Rooms from "./Components/rooms"
import Architecture from "./Components/architecture"
import Music from "./Components/music"
import Cartoons from "./Components/cartoons";
import Colors from "./Components/colors" 
import Mood from "./Components/mood"
import Other from "./Components/other"

const Themes = () => {
  return (
    <body>
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
          <div className="flex justify-center items-center flex-col relative z-10 text-white">
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.heroHeading}
            >
              Welcome to
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row justify-center items-center"
            >
              <h1 className={styles.heroHeading}>the Doc-</h1>
              <div className={styles.heroDText} />
              <h1 className={styles.heroHeading}>
                {" "}
                <span className="text-customyello">Themes</span>
              </h1>
              <hr className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="mt-52">
      <Realism />
      <Retro />
      <Scifi />
      <Atmosphere />
      <Rooms />
      <Architecture />
      <Music />
      <Cartoons />
      <Colors />
      <Mood />
      <Other />
      </section>
    </body>
  );
};

export default Themes;
