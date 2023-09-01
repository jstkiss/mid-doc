import { useState } from "react";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import ExploreCard from "./ExploreCard";
import styles from "../../styles";
import { staggerContainer } from "../../utils/motion";
import { exploreWorlds } from "./index";

const Explore = () => {
  const [active, setActive] = useState('world-2')
  return (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='The wolrd' textStyles='text-center' />
      <TitleText
        title={
          <>
            Choose the wolrd you want <br className='md:block hidden' />
            To explore
          </>
        }
        textStyles='text-center'
      />
      <div className='mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5'>
        {exploreWorlds.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </motion.div>
  </section>
)
        };

export default Explore;
