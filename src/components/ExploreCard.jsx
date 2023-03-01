'use client';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn } from '../../utils/motion';
import Image from 'next/image';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[O,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-3xl">
        <div
          className={`${styles.flexCenter} w-14 h-14 rounded-3xl glassmorphism mb-4`}
        >
          <Image
            src="/raw.png"
            alt="head"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-base leading-5 text-white uppercase">
          Thanks Midjourney
        </p>
        <h2 className="mt-6 font-semibold sm:text-text-2xl text-2xl text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
