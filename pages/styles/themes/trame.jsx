import React from "react";
import { useEffect, useState } from "react";



const categories = [
  {
    id: 1,
    name: "",
    image:
      "",
  },
  {
    id: 2,
    name: "",
    image:
      "",
  },
  {
    id: 3,
    name: "",
    image: "",
  },
  {
    id: 4,
    name: "",
    image: "",
  },
  {
    id: 5,
    name: "",
    image: "",
  },
  {
    id: 6,
    name: "",
    image: "",
  },
  {
    id: 7,
    name: "",
    image: "",
  },
  {
    id: 8,
    name: "",
    image: "",
  },
  {
    id: 9,
    name: "",
    image: "",
  },
  {
    id: 10,
    name: "",
    image: "",
  },
  {
    id: 11,
    name: "",
    image: "",
  },
  {
    id: 12,
    name: "",
    image: "",
  },
  {
    id: 13,
    name: "",
    image: "",
  },
  {
    id: 14,
    name: "",
    image: "",
  },
  {
    id: 15,
    name: "",
    image: "",
  },
  {
    id: 16,
    name: "",
    image: "",
  },
  {
    id: 17,
    name: "",
    image: "",
  },
  {
    id: 18,
    name: "",
    image: "",
  },
  {
    id: 19,
    name: "",
    image: "",
  },
  {
    id: 20,
    name: "",
    image: "",
  },
  {
    id: 21,
    name: "",
    image: "",
  },
  {
    id: 22,
    name: "",
    image: "",
  },
  {
    id: 23,
    name: "",
    image: "",
  },
  {
    id: 24,
    name: "",
    image: "",
  },
  {
    id: 25,
    name: "",
    image: "",
  },
  {
    id: 26,
    name: "",
    image: "",
  },
  {
    id: 27,
    name: "",
    image: "",
  },
  {
    id: 28,
    name: "",
    image: "",
  },
  {
    id: 29,
    name: "",
    image: "",
  },
  {
    id: 30,
    name: "",
    image: "",
  },
  {
    id: 31,
    name: "",
    image: "",
  },
  {
    id: 32,
    name: "",
    image: "",
  },
  {
    id: 33,
    name: "",
    image: "",
  },
  {
    id: 34,
    name: "",
    image: "",
  },
  {
    id: 35,
    name: "",
    image: "",
  },
  {
    id: 36,
    name: "",
    image: "",
  },
  {
    id: 37,
    name: "",
    image: "",
  },
  {
    id: 38,
    name: "",
    image: "",
  },
  {
    id: 39,
    name: "",
    image: "",
  },
  {
    id: 40,
    name: "",
    image: "",
  },
  {
    id: 41,
    name: "",
    image: "",
  },
  {
    id: 42,
    name: "",
    image: "",
  },
  {
    id: 43,
    name: "",
    image: "",
  },
  {
    id: 44,
    name: "",
    image: "",
  },
  {
    id: 45,
    name: "",
    image: "",
  },
  {
    id: 46,
    name: "",
    image: "",
  },
  {
    id: 47,
    name: "",
    image: "",
  },
  {
    id: 48,
    name: "",
    image:
      "",
  },
  {
    id: 49,
    name: "",
    image:
      "",
  },
  {
    id: 50,
    name: "",
    image: "",
  },
  {
    id: 51,
    name: "",
    image: "",
  },
  {
    id: 52,
    name: "",
    image: "",
  },
  {
    id: 53,
    name: "",
    image: "",
  },
  {
    id: 54,
    name: "",
    image: "",
  },
  {
    id: 56,
    name: "",
    image: "",
  },
  {
    id: 57,
    name: "",
    image: "",
  },
  {
    id: 58,
    name: "",
    image: "",
  },
  {
    id: 59,
    name: "",
    image: "",
  },
  {
    id: 60,
    name: "",
    image: "",
  },
  {
    id: 61,
    name: "",
    image: "",
  },
  {
    id: 62,
    name: "",
    image: "",
  },
  {
    id: 63,
    name: "",
    image: "",
  },
  {
    id: 64,
    name: "",
    image: "",
  },
  {
    id: 65,
    name: "",
    image: "",
  },
  {
    id: 67,
    name: "",
    image: "",
  },
  {
    id: 68,
    name: "",
    image: "",
  },
  {
    id: 68,
    name: "",
    image: "",
  },
  {
    id: 69,
    name: "",
    image: "",
  },
  {
    id: 70,
    name: "",
    image: "",
  },
  {
    id: 71,
    name: "",
    image: "",
  },
  {
    id: 72,
    name: "",
    image: "",
  },
  {
    id: 73,
    name: "",
    image: "",
  },
  {
    id: 74,
    name: "",
    image: "",
  },
  {
    id: 75,
    name: "",
    image: "",
  },
  {
    id: 76,
    name: "",
    image: "",
  },
  {
    id: 77,
    name: "",
    image: "",
  },
  {
    id: 78,
    name: "",
    image: "",
  },
  {
    id: 79,
    name: "",
    image: "",
  },
  {
    id: 80,
    name: "",
    image: "",
  },
  {
    id: 81,
    name: "",
    image: "",
  },
  {
    id: 82,
    name: "",
    image: "",
  },
  {
    id: 83,
    name: "",
    image: "",
  },
  {
    id: 84,
    name: "",
    image: "",
  },
  {
    id: 85,
    name: "",
    image: "",
  },
  {
    id: 86,
    name: "",
    image: "",
  },
  {
    id: 87,
    name: "",
    image: "",
  },
  {
    id: 88,
    name: "",
    image: "",
  },
  {
    id: 89,
    name: "",
    image: "",
  },
  {
    id: 90,
    name: "",
    image: "",
  },
  {
    id: 91,
    name: "",
    image: "",
  },
  {
    id: 92,
    name: "",
    image: "",
  },
  {
    id: 93,
    name: "",
    image: "",
  },
  {
    id: 94,
    name: "",
    image: "",
  },
  {
    id: 95,
    name: "",
    image: "",
  },
];



const Countries = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <section className="mt-5 ml-20">
        <details className="cursor-pointer">
          <summary className="cursor-pointer text-customyello">
            Realiste/Abstrait
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

export default Countries;
