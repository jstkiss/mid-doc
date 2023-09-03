import Header from "../../../src/components/header";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../styles";
import React from "react";
import Image from "next/image";
import { useState } from "react";


const Raibow = () => {
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
                <span className="text-customyello">Raibow</span>
              </h1>
              <hr className="text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="grid grid-cols-6 grid-rows-42">
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Black/DarkBlack.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            DarkBlack
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Black/Black.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            Black
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Black/Light_Black.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            Light_Black
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/DarkGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            DarkGray
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/Gray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            Gray
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/SlateGray/DarkSlateGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
          DarkSlateGray
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/Dark_Gray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            Dark_Gray
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/White/Dark_White.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            Dark-White
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/Light_Gray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            Light_Gray
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/Silver/Silver.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            Silver
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/Silver/SilverGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
            SilverGray
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/Silver/Light_SilverGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">
          Light_SilverGray
          </h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/Silver/Dark_SilverGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_SilverGray</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/DimGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DimGray</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/SlateGray/SlateGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">SlateGray</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/SlateGray/LightSlateGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightSlateGray</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/MediumGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumGray</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Gray/LightGray.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightGray</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/White/Light_White.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_White</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/White/WhiteSmoke.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">WhiteSmoke</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/White/Gainsboro.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Gainsboro</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/White/MediumWhite.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumWhite</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/White/White.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">White</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/KhakiBrown.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">KhakiBrown</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Tan/Tan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Tan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Tan/Light_Tan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Tan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Beige/MediumBeige.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumBeige</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Beige/Beige.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Beige</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Beige/Light_Beige.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Beige</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Dark_Brown.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Brown</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Tan/Dark_Tan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Tan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Brown.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Brown</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Beige/Dark_Beige.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Beige</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Light_Brown.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Brown</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/Vivid_Brown.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Brown</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Maroon/Dark_Maroon.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Maroon</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Maroon/Vivid_Maroon.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Maroon</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Maroon/Maroon.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Maroon</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Maroon/Light_Maroon.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Maroon</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Brown/RosyBrown.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">RosyBrown</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/DarkRed.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkRed</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Dark_Red.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Red</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/MediumRed.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumRed</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Red.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Red</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Vivid_Red.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Red</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Light_Red.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Red</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/RedOrange/Dark_RedOrange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_RedOrange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Crimson.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Crimson</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Red/Scarlet.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Scarlet</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/RedOrange/Light_RedOrange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_RedOrange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/RedOrange/RedOrange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">RedOrange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/RedOrange/OrangeRed.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">OrangeRed</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Orange/Dark_Orange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Orange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Orange/DarkOrange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkOrange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Orange/MediumOrange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumOrange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Orange/Vivid_Orange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Orange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Orange/Orange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Orange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Orange/Light_Orange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Orange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/RedOrange/Light_RedOrange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_RedOrange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowOrange/OrangeYellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">OrangeYellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowOrange/YellowOrange.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">YellowOrange</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Goldenrod/DarkGoldenrod.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkGoldenrod</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Goldenrod/PaleGoldenrod.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">PaleGoldenrod</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Goldenrod/Goldenrod.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Goldenrod</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Goldenrod/LightGoldenrodYellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-44">LightGoldenrodYellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/LightYellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightYellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Dark_Yellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Yellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Gold.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Gold</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Vivid_Yellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Yellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Yellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Yellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Yellow/Light_Yellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Yellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/SpringGreen/Light_SpringGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Light_SpringGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/MediumGreenYellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-44">MediumGreenYellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/Light_YellowGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Light_YellowGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/Light_GreenYellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Light_GreenYellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/Dark_GreenYellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Dark_GreenYellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/Dark_YellowGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Dark_YellowGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/MediumYellowGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-44">MediumYellowGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/ChartreuseGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">ChartreuseGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/GreenYellow.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">GreenYellow</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/YellowGreen/YellowGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">YellowGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Lime/Dark_Lime.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Lime</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Lime/Lime.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Lime</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Lime/Vivid_Lime.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Lime</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Lime/LimeGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LimeGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Lime/Light_Lime.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Lime</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Olive/Dark_OliveGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Dark_OliveGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Olive/Olive_Green.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Olive_Green</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Olive/OliveGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">OliveGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Olive/Light_OliveGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Light_OliveGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/LawnGreen/Dark_LawnGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Dark_LawnGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Vivid_Green.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Green</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/LightGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/LawnGreen/LawnGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LawnGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Light_Green.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Green</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/PaleGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">PaleGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/ForestGreen/Light_ForestGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-44">Light_ForestGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Olive/DarkOliveGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkOliveGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Green.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Green</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/SpringGreen/SpringGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">SpringGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/LawnGreen/Light_LawnGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">Light_LawnGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/SpringGreen/MediumSpringGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-44">MediumSpringGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/Dark_Green.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Green</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/DarkGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/ForestGreen/ForestGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">ForestGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/SeaGreen/DarkSeaGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkSeaGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/SeaGreen/MediumSeaGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumSeaGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/SeaGreen/SeaGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">SeaGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/SpringGreen/Dark_SpringGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_SpringGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Green/ForestGreen/Dark_ForestGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_ForestGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/BlueGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">BlueGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/GreenBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">GreenBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/MediumTeal.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumTeal</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/Turquoise/DarkTurquoise.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkTurquoise</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/Turquoise/MediumTurquoise.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-40">MediumTurquoise</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/Turquoise/Turquoise.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Turquoise</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/Turquoise/PaleTurquoise.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">PaleTurquoise</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/SeaGreen/LightSeaGreen.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightSeaGreen</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/DarkTeal.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkTeal</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Aqua/Dark_Aqua.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Aqua</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/Teal.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Teal</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Teal/LightTeal.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightTeal</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Aqua/Light_Aqua.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Aqua</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Cyan/Dark_Cyan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Cyan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Cyan/DarkCyan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkCyan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Cyan/Cyan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Cyan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Cyan/Light_Cyan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Cyan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Cyan/LightCyan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightCyan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Cyan/Vivid_Cyan.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Cyan</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Aqua/Aqua.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Aqua</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Aqua/MediumAquamarine.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumAquamarine</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Azure/Azure.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Azure</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Light_Blue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Blue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/PowderBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">PowderBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/LightBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Indigo/Light_Indigo.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Indigo</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/SkyBlue/DeepSkyBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DeepSkyBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Azure/Light_Azure.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Azure</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/SkyBlue/SkyBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">SkyBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/SkyBlue/LightSkyBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightSkyBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Azure/Dark_Azure.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Azure</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/SteelBlue/SteelBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">SteelBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/SteelBlue/LightSteelBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightSteelBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Indigo/Dark_Indigo.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Indigo</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/DarkBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/SlateBlue/MediumSlateBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumSlateBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Vivid_Blue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Blue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/MidnightBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MidnightBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Dark_Blue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Blue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/MediumBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Blue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Blue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/RoyalBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">RoyalBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/CornflowerBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">CornflowerBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/Indigo/Indigo.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Indigo</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/SlateBlue/SlateBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">SlateBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Blue/NavyBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">NavyBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Violet/BlueViolet.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">BlueViolet</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/PurpleBlue/BluePurple.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">BluePurple</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/PurpleBlue/PurpleBlue.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">PurpleBlue</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/Dark_Purple.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Purple</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Violet/DarkViolet.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkViolet</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Violet/Violet.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Violet</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/DarkOrchid.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkOrchid</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/RebeccaPurple.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">RebeccaPurple</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Nothibg</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/Light_Purple.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Purple</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/LavenderBlush.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LavenderBlush</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/Purple.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Purple</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/Vivid_Purple.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Purple</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Purple/MediumPurple.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumPurple</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Nothibg</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Fuchsia/MediumFuchsia.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumFuchsia</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Fuchsia/Light_Fuchsia.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Fuchsia</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Violet/VioletRed/MediumVioletRed.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">MediumVioletRed</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Violet/VioletRed/PaleVioletRed.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">PaleVioletRed</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Nothibg</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Fuchsia/Dark_Fuchsia.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Fuchsia</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Magenta/Dark_Magenta.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Magenta</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Magenta/DarkMagenta.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DarkMagenta</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Magenta/Vivid_Magenta.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Magenta</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Magenta/Magenta.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Magenta</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Magenta/Light_Magenta.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Magenta</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Fuchsia/Fuchsia.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Fuchsia</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Dark_Pink.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Pink</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Vivid_Pink.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Vivid_Pink</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/DeepPink.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">DeepPink</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Hotpink.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Hotpink</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Pink.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Pink</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">404</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Blush/Dark_Blush.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Dark_Blush</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="/moi.png"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Nothibg</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Blush/Light_Blush.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Blush</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Blush/Blush.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Blush</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/LightPink.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">LightPink</h1>
        </div>
        <div className="flex flex-col items-center pb-6">
          <Image
            className="pb-2"
            src="https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/raw/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Colors/Pink/Light_Pink.webp?raw=true"
            width={200}
            height={200}
          />
          <h1 className="flex justify-center border rounded-full bg-customyello w-32">Light_Pink</h1>
        </div>
      </section>
    </body>
  );
};

export default Raibow;
