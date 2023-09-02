"use client";

import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10 mt-24`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-2 font-normal sm:text-2xl text-center text-secondary-white text-white'
      >
        <span className='font-extrabold text-white'> Midjourney </span>
        est un laboratoire de recherche indépendant qui produit un programme d&apos;intelligence artificielle sous le même nom et qui permet de créer des images à partir de descriptions textuelles
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='arrow-down.svg'
        alt='arrow-donw'
        className='w-4 h-7 object-contain mt-7'
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
