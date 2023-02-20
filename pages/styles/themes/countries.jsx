import React from "react";
import { useEffect, useState } from "react";



const categories = [
  {
    id: 1,
    name: "Country",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Country.png?raw=true",
  },
  {
    id: 2,
    name: "Nation",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nation.png?raw=true",
  },
  {
    id: 3,
    name: "American-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/American-Style.png?raw=true",
  },
  {
    id: 4,
    name: "American Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/American_Realism.png?raw=true",
  },
  {
    id: 5,
    name: "Canadian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Canadian-Style.png?raw=true",
  },
  {
    id: 6,
    name: "Canadian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Canadian_Realism.png?raw=true",
  },
  {
    id: 7,
    name: "Europunk",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Europunk.png?raw=true",
  },
  {
    id: 8,
    name: "Brazilian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Brazilian-Style.png?raw=true",
  },
  {
    id: 9,
    name: "Brazilian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Brazilian_Realism.png?raw=true",
  },
  {
    id: 10,
    name: "Incan",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Incan.png?raw=true",
  },
  {
    id: 11,
    name: "Tiwanaku",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tiwanaku.png?raw=true",
  },
  {
    id: 12,
    name: "Mexican-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mexican-Style.png?raw=true",
  },
  {
    id: 13,
    name: "Mexican Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mexican_Realism.png?raw=true",
  },
  {
    id: 14,
    name: "African-Style	",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/African-Style.png?raw=true",
  },
  {
    id: 15,
    name: "African Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/African_Realism.png?raw=true",
  },
  {
    id: 16,
    name: "Mali",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mali.png?raw=true",
  },
  {
    id: 17,
    name: "	Benin",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Benin.png?raw=true",
  },
  {
    id: 18,
    name: "Australian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Australian-Style.png?raw=true",
  },
  {
    id: 19,
    name: "Australian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Australian_Realism.png?raw=true",
  },
  {
    id: 20,
    name: "Spanish-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Spanish-Style.png?raw=true",
  },
  {
    id: 21,
    name: "Spanish Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Spanish_Realism.png?raw=true",
  },
  {
    id: 22,
    name: "French-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/French-Style.png?raw=true",
  },
  {
    id: 23,
    name: "French Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/French_Realism.png?raw=true",
  },
  {
    id: 24,
    name: "Italian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Italian-Style.png?raw=true",
  },
  {
    id: 25,
    name: "	Italian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Italian_Realism.png?raw=true",
  },
  {
    id: 26,
    name: "Turkish-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Turkish-Style.png?raw=true",
  },
  {
    id: 27,
    name: "Turkish Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Turkish_Realism.png?raw=true",
  },
  {
    id: 28,
    name: "British-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/British-Style.png?raw=true",
  },
  {
    id: 29,
    name: "British Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/British_Realism.png?raw=true",
  },
  {
    id: 30,
    name: "German-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/German-Style.png?raw=true",
  },
  {
    id: 31,
    name: "German Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/German_Realism.png?raw=true",
  },
  {
    id: 32,
    name: "German Romanticism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/German_Romanticism.png?raw=true",
  },
  {
    id: 33,
    name: "Greek-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greek-Style.png?raw=true",
  },
  {
    id: 34,
    name: "Greek Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greek_Realism.png?raw=true",
  },
  {
    id: 35,
    name: "Greek Icon",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greek_Icon.png?raw=true",
  },
  {
    id: 36,
    name: "Greek Mythology",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greek_Mythology.png?raw=true",
  },
  {
    id: 37,
    name: "Greek God",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greek_God.png?raw=true",
  },
  {
    id: 38,
    name: "Greek Goddess",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Greek_Goddess.png?raw=true",
  },
  {
    id: 39,
    name: "Polish-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Polish-Style.png?raw=true",
  },
  {
    id: 40,
    name: "	Polish Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Polish_Realism.png?raw=true",
  },
  {
    id: 41,
    name: "Hungarian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hungarian-Style.png?raw=true",
  },
  {
    id: 42,
    name: "	Hungarian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hungarian_Realism.png?raw=true",
  },
  {
    id: 43,
    name: "Swiss-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Swiss-Style.png?raw=true",
  },
  {
    id: 44,
    name: "	Swiss Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Swiss_Realism.png?raw=true",
  },
  {
    id: 45,
    name: "Swedish-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Swedish-Style.png?raw=true",
  },
  {
    id: 46,
    name: "Irish-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Irish-Style.png?raw=true",
  },
  {
    id: 47,
    name: "Irish Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Irish_Realism.png?raw=true",
  },
  {
    id: 48,
    name: "Roman-Style",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Roman-Style.png?raw=true",
  },
  {
    id: 49,
    name: "Roman Realism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Roman_Realism.png?raw=true",
  },
  {
    id: 50,
    name: "Roman Icon",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Roman_Icon.png?raw=true",
  },
  {
    id: 51,
    name: "Roman Mythology",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Roman_Mythology.png?raw=true",
  },
  {
    id: 52,
    name: "	Roman God",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Roman_God.png?raw=true",
  },
  {
    id: 53,
    name: "Roman Goddess",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Roman_Goddess.png?raw=true",
  },
  {
    id: 54,
    name: "Dominican-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dominican-Style.png?raw=true",
  },
  {
    id: 56,
    name: "Dominican Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dominican_Realism.png?raw=true",
  },
  {
    id: 57,
    name: "Chinese-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chinese-Style.png?raw=true",
  },
  {
    id: 58,
    name: "Chinese Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chinese_Realism.png?raw=true",
  },
  {
    id: 59,
    name: "Tang Dynasty",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tang_Dynasty.png?raw=true",
  },
  {
    id: 60,
    name: "Timurid",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Timurid.png?raw=true",
  },
  {
    id: 61,
    name: "Japanese",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Japanese.png?raw=true",
  },
  {
    id: 62,
    name: "Taisho Period",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Taisho_Period.png?raw=true",
  },
  {
    id: 63,
    name: "Japanese-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Japanese-Style.png?raw=true",
  },
  {
    id: 64,
    name: "Japanese Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Japanese_Realism.png?raw=true",
  },
  {
    id: 65,
    name: "	Japonism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Japonism.png?raw=true",
  },
  {
    id: 67,
    name: "Ukrainian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ukrainian-Style.png?raw=true",
  },
  {
    id: 68,
    name: "Ukrainian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ukrainian_Realism.png?raw=true",
  },
  {
    id: 68,
    name: "Indonesian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Indonesian-Style.png?raw=true",
  },
  {
    id: 69,
    name: "Indonesian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Indonesian_Realism.png?raw=true",
  },
  {
    id: 70,
    name: "Balinese",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Balinese.png?raw=true",
  },
  {
    id: 71,
    name: "Tibetan",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tibetan.png?raw=true",
  },
  {
    id: 72,
    name: "Khmer",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Khmer.png?raw=true",
  },
  {
    id: 73,
    name: "Thai",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Thai.png?raw=true",
  },
  {
    id: 74,
    name: "Bagan",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bagan.png?raw=true",
  },
  {
    id: 75,
    name: "Indian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Indian-Style.png?raw=true",
  },
  {
    id: 76,
    name: "Indian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Indian_Realism.png?raw=true",
  },
  {
    id: 77,
    name: "Bavarian",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bavarian.png?raw=true",
  },
  {
    id: 78,
    name: "Minoan",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Minoan.png?raw=true",
  },
  {
    id: 79,
    name: "Cycladic",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cycladic.png?raw=true",
  },
  {
    id: 80,
    name: "Puebloan",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Puebloan.png?raw=true",
  },
  {
    id: 81,
    name: "Armenian",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Armenian.png?raw=true",
  },
  {
    id: 82,
    name: "Russian-Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Russian-Style.png?raw=true",
  },
  {
    id: 83,
    name: "Russian Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Russian_Realism.png?raw=true",
  },
  {
    id: 84,
    name: "Propaganda",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Propaganda.png?raw=true",
  },
  {
    id: 85,
    name: "American Propaganda",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/American_Propaganda.png?raw=true",
  },
  {
    id: 86,
    name: "Soviet Propaganda",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Soviet_Propaganda.png?raw=true",
  },
  {
    id: 87,
    name: "Arabic",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Arabic.png?raw=true",
  },
  {
    id: 88,
    name: "	Caribbean",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Caribbean.png?raw=true",
  },
  {
    id: 89,
    name: "	Mayan",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mayan.png?raw=true",
  },
  {
    id: 90,
    name: "Egyptian Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Egyptian_Art.png?raw=true",
  },
  {
    id: 91,
    name: "Socialist Realism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Socialist_Realism.png?raw=true",
  },
  {
    id: 92,
    name: "Nordic Mythology",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nordic_Mythology.png?raw=true",
  },
  {
    id: 93,
    name: "Byzantine",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Byzantine.png?raw=true",
  },
  {
    id: 94,
    name: "Byzantine Icon",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Byzantine_Icon.png?raw=true",
  },
  {
    id: 95,
    name: "Christian Icon",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Christian_Icon.png?raw=true",
  },
];



const Countries = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Countries and Nations
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
                <Image
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
  );
};

export default Countries;
