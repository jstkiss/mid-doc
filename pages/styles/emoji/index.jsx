import Header from "../../../src/components/header";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../styles";
import React from "react";
import Smiley from "./Components/smiley";
import Gestures from "./Components/gestures";
import People from "./Components/people";
import Clothing from "./Components/clothing";
import Animals from "./Components/animals";
import Outer from "./Components/outer";
import Food from "./Components/food";
import Travel from "./Components/travel";
import Objects from "./Components/objects";
import Symbols from "./Components/symbols";

const Emoji = () => {
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
                <span className="text-customyello">Emoji</span>
              </h1>
              <hr className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="mt-52">
        <Smiley />
        <Gestures />
        <People />
        <Clothing />
        <Animals />
        <Outer />
        <Food />
        <Travel />
        <Objects />
        <Symbols />
      </section>
    </body>
  );
};

export default Emoji;
