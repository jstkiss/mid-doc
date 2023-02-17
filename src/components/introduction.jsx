import { motion } from "framer-motion";
import styles from "../../styles";
import { staggerContainer, textVariant } from "../../utils/motion";


// let styles = {};

const Introduction = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-7 pr-4 pt-32 lg:pr-36 lg:pl-36 lg:mr-36 lg:ml-36 lg:text-7xl text-3xl`}>
  <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
    <div className='flex justify-center items-center flex-col relative z-10'>
      <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        Bienvenue sur
      </motion.h1>
      <motion.div
        variants={textVariant(1.2)}
        className='flex flex-row justify-center items-center'
      >
        <h1 className={styles.heroHeading}>La Doc-</h1>
        <div className={styles.heroDText} />
        <h1 className={styles.heroHeading}> <span className="text-customyello">Midjourney</span></h1>
      </motion.div>
    </div>
  </motion.div>
</section>
  );
  
  export default Introduction;
