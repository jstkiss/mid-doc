import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../../styles";
import React from "react";
import { useState } from "react";
import Header from "../../../src/components/header";
import Realism from "./Components/realism";
import Retro from "./Components/retro";
import Scifi from "./Components/scifi";
import Frame from "../../../src/components/CadreThemes";

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
                <span className="text-customyello">Styles</span>
              </h1>
              <hr className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section>
        <Frame />
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
