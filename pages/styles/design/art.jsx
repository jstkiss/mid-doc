import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";


const categories = [
  {
    id: 1,
    name: "Pop-Art",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pop-Art.png?raw=true",
  },
  {
    id: 2,
    name: "Warhol",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Warhol.png?raw=true",
  },
  {
    id: 3,
    name: "Fauvism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fauvism.png?raw=true",
  },
  {
    id: 4,
    name: "Lo-fi",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lo-fi.png?raw=true",
  },
  {
    id: 5,
    name: "Hi-fi",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Hi-fi.png?raw=true",
  },
  {
    id: 6,
    name: "High Fidelity",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/High_Fidelity.png?raw=true",
  },
  {
    id: 7,
    name: "Biomorphic",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Biomorphic.png?raw=true",
  },
  {
    id: 8,
    name: "Ornamental",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ornamental.png?raw=true",
  },
  {
    id: 9,
    name: "Bauhaus Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bauhaus_Style.png?raw=true",
  },
  {
    id: 10,
    name: "Modernism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Modernism.png?raw=true",
  },
  {
    id: 11,
    name: "Composition",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Composition.png?raw=true",
  },
  {
    id: 12,
    name: "Transautomatism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Transautomatism.png?raw=true",
  },
  {
    id: 13,
    name: "Cloisonnism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Cloisonnism.png?raw=true",
  },
  {
    id: 14,
    name: "Orphism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Orphism.png?raw=true",
  },
  {
    id: 15,
    name: "Suprematism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Suprematism.png?raw=true",
  },
  {
    id: 16,
    name: "Vorticism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Vorticism.png?raw=true",
  },
  {
    id: 17,
    name: "Eccentrism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Eccentrism.png?raw=true",
  },
  {
    id: 18,
    name: "Rayonism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rayonism.png?raw=true",
  },
  {
    id: 19,
    name: "Spectralism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Spectralism.png?raw=true",
  },
  {
    id: 20,
    name: "Luminism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Luminism.png?raw=true",
  },
  {
    id: 21,
    name: "Muralism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Muralism.png?raw=true",
  },
  {
    id: 22,
    name: "Spatialism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Spatialism.png?raw=true",
  },
  {
    id: 23,
    name: "Diptych",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Diptych.png?raw=true",
  },
  {
    id: 24,
    name: "Precisionism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Precisionism.png?raw=true",
  },
  {
    id: 25,
    name: "Regionalism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Regionalism.png?raw=true",
  },
  {
    id: 26,
    name: "Classical",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Classical.png?raw=true",
  },
  {
    id: 27,
    name: "Classicism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Classicism.png?raw=true",
  },
  {
    id: 28,
    name: "Academicism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Academicism.png?raw=true",
  },
  {
    id: 29,
    name: "Miserablism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Miserablism.png?raw=true",
  },
  {
    id: 30,
    name: "Synchronism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Synchronism.png?raw=true",
  },
  {
    id: 31,
    name: "Romanticism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Romanticism.png?raw=true",
  },
  {
    id: 32,
    name: "Constructivist",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Constructivist.png?raw=true",
  },
  {
    id: 33,
    name: "Constructivism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Constructivism.png?raw=true",
  },
  {
    id: 34,
    name: "Baroque",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Baroque.png?raw=true",
  },
  {
    id: 35,
    name: "Rococo",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Rococo.png?raw=true",
  },
  {
    id: 36,
    name: "Positivism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Positivism.png?raw=true",
  },
  {
    id: 37,
    name: "Pictorialism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Pictorialism.png?raw=true",
  },
  {
    id: 38,
    name: "Gothic",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Gothic.png?raw=true",
  },
  {
    id: 39,
    name: "Tubism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tubism.png?raw=true",
  },
  {
    id: 40,
    name: "Naturalism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Naturalism.png?raw=true",
  },
  {
    id: 41,
    name: "Idyllic",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Vedute.png?raw=true",
  },
  {
    id: 42,
    name: "Verism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Verism.png?raw=true",
  },
  {
    id: 43,
    name: "Divisionism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Divisionism.png?raw=true",
  },
  {
    id: 44,
    name: "Nuagisme",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nuagisme.png?raw=true",
  },
  {
    id: 45,
    name: "Sumatraism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sumatraism.png?raw=true",
  },
  {
    id: 46,
    name: "Anachronism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Anachronism.png?raw=true",
  },
  {
    id: 47,
    name: "Synthetism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Synthetism.png?raw=true",
  },
  {
    id: 48,
    name: "Tonalism",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tonalism.png?raw=true",
  },
  {
    id: 49,
    name: "Barbouillage",
    image:
      "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Barbouillage.png?raw=true",
  },
  {
    id: 50,
    name: "Orientalism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Orientalism.png?raw=true",
  },
  {
    id: 51,
    name: "Symbolism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Symbolism.png?raw=true",
  },
  {
    id: 52,
    name: "Lettrism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lettrism.png?raw=true",
  },
  {
    id: 53,
    name: "Biedermeier",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Biedermeier.png?raw=true",
  },
  {
    id: 54,
    name: "Idealism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Idealism.png?raw=true",
  },
  {
    id: 56,
    name: "Purism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Purism.png?raw=true",
  },
  {
    id: 57,
    name: "Intimism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Intimism.png?raw=true",
  },
  {
    id: 58,
    name: "Impressionism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Impressionism.png?raw=true",
  },
  {
    id: 59,
    name: "Post-Impressionism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Post-Impressionism.png?raw=true",
  },
  {
    id: 60,
    name: "Dau al Set",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dau_al_Set.png?raw=true",
  },
  {
    id: 61,
    name: "Art Deco",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Art_Deco.png?raw=true",
  },
  {
    id: 62,
    name: "Art Nouveau",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Art_Nouveau.png?raw=true",
  },
  {
    id: 63,
    name: "Nouveau Realisme",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nouveau_Realisme.png?raw=true",
  },
  {
    id: 64,
    name: "Award Winning Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Award_Winning_Art.png?raw=true",
  },
  {
    id: 65,
    name: "Epic Composition",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Epic_Composition.png?raw=true",
  },
  {
    id: 67,
    name: "Drop Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Drop_Art.png?raw=true",
  },
  {
    id: 68,
    name: "Folk Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Folk_Art.png?raw=true",
  },
  {
    id: 68,
    name: "Postcolonial Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Postcolonial_Art.png?raw=true",
  },
  {
    id: 69,
    name: "Renaissance",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Renaissance.png?raw=true",
  },
  {
    id: 70,
    name: "Harlem-Renaissance",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Harlem-Renaissance.png?raw=true",
  },
  {
    id: 71,
    name: "Lowbrow",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lowbrow.png?raw=true",
  },
  {
    id: 72,
    name: "Figurativism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Figurativism.png?raw=true",
  },
  {
    id: 73,
    name: "Dada",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dada.png?raw=true",
  },
  {
    id: 74,
    name: "Dadaism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Dadaism.png?raw=true",
  },
  {
    id: 75,
    name: "Neo-Dadaism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Neo-Dadaism.png?raw=true",
  },
  {
    id: 76,
    name: "Medievalism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Medievalism.png?raw=true",
  },
  {
    id: 77,
    name: "New Medievalism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/New_Medievalism.png?raw=true",
  },
  {
    id: 78,
    name: "Vienna Secession",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Vienna_Secession.png?raw=true",
  },
  {
    id: 79,
    name: "Multidimensional Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Multidimensional_Art.png?raw=true",
  },
  {
    id: 80,
    name: "Temporary Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Temporary_Art.png?raw=true",
  },
  {
    id: 81,
    name: "Op Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Op_Art.png?raw=true",
  },
  {
    id: 82,
    name: "Fourier Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Fourier_Art.png?raw=true",
  },
  {
    id: 83,
    name: "Nebulous Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Nebulous_Art.png?raw=true",
  },
  {
    id: 84,
    name: "Mozarabic Art",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Mozarabic_Art.png?raw=true",
  },
  {
    id: 85,
    name: "Anti",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Anti.png?raw=true",
  },
  {
    id: 86,
    name: "Anti-Design",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Anti-Design.png?raw=true",
  },
  {
    id: 87,
    name: "Compound Design",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Compound_Design.png?raw=true",
  },
  {
    id: 88,
    name: "Grunge Revival Design",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Grunge_Revival_Design.png?raw=true",
  },
  {
    id: 89,
    name: "Stuckism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Stuckism.png?raw=true",
  },
  {
    id: 90,
    name: "Tactile Design",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tactile_Design.png?raw=true",
  },
  {
    id: 91,
    name: "Memphis Style",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Memphis_Style.png?raw=true",
  },
  {
    id: 92,
    name: "Memphis Design",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Memphis_Design.png?raw=true",
  },
  {
    id: 93,
    name: "Tachisme",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Tachisme.png?raw=true",
  },
  {
    id: 94,
    name: "Avant-Garde",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Avant-Garde.png?raw=true",
  },
  {
    id: 95,
    name: "Transavantgarde",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Transavantgarde.png?raw=true",
  },
  {
    id: 96,
    name: "Frasurbane",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Frasurbane.png?raw=true",
  },
  {
    id: 97,
    name: "Sfumato",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Sfumato.png?raw=true",
  },
  {
    id: 98,
    name: "Neue Sachlichkeit",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Neue_Sachlichkeit.png?raw=true",
  },
  {
    id: 99,
    name: "Triptych",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Triptych.png?raw=true",
  },
  {
    id: 100,
    name: "Foreshortening",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Foreshortening.png?raw=true",
  },
  {
    id: 101,
    name: "Booru",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Booru.png?raw=true",
  },
  {
    id: 102,
    name: "Silhouette",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Silhouette.png?raw=true",
  },
  {
    id: 103,
    name: "Topographic",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Topographic.png?raw=true",
  },
  {
    id: 104,
    name: "Chiaroscuro",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Chiaroscuro.png?raw=true",
  },
  {
    id: 105,
    name: "Incoherents",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Incoherents.png?raw=true",
  },
  {
    id: 106,
    name: "Existential",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Existential.png?raw=true",
  },
  {
    id: 107,
    name: "Kitsch",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Kitsch.png?raw=true",
  },
  {
    id: 108,
    name: "Store-Brand",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Store-Brand.png?raw=true",
  },
  {
    id: 109,
    name: "Contemporary",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Contemporary.png?raw=true",
  },
  {
    id: 110,
    name: "Costumbrismo",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Costumbrismo.png?raw=true",
  },
  {
    id: 111,
    name: "Amate",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Amate.png?raw=true",
  },
  {
    id: 112,
    name: "Wuhtercuhler",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Wuhtercuhler.png?raw=true",
  },
  {
    id: 113,
    name: "Brocade",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Brocade.png?raw=true",
  },
  {
    id: 114,
    name: "Escapism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Escapism.png?raw=true",
  },
  {
    id: 115,
    name: "Ligne Claire",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Ligne_Claire.png?raw=true",
  },
  {
    id: 116,
    name: "Existentialism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Existentialism.png?raw=true",
  },
  {
    id: 117,
    name: "Lovecraftian",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Lovecraftian.png?raw=true",
  },
  {
    id: 118,
    name: "Bohemianism",
    image: "https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Images/MJ_V4/V4_Alpha_3.5/Midjourney_Styles/Bohemianism.png?raw=true",
  },
];



const Art = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
          Art Styles
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
                <img
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

export default Art;
