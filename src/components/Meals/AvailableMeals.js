import React from "react";

import img1 from "../../images/gallery/1.jpg";
import img2 from "../../images/gallery/2.jpg";
import img3 from "../../images/gallery/3.jpg";
import img4 from "../../images/gallery/4.jpg";
import img5 from "../../images/gallery/5.jpg";
import img6 from "../../images/gallery/6.jpg";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: 1,
    image: img1,
    title: "Steak & Creamy Mash",
    category: ["Main Meals", "Hot Dishes"],
    price: 27,
  },
  {
    id: 2,
    image: img2,
    title: "Steak & Creamy Mash",
    category: ["Main Meals", "Hot Dishes"],
    price: 27,
  },
  {
    id: 3,
    image: img3,
    title: "Steak & Creamy Mash",
    category: ["Main Meals", "Hot Dishes"],
    price: 27,
  },
  {
    id: 4,
    image: img4,
    title: "Steak & Creamy Mash",
    category: ["Main Meals", "Hot Dishes"],
    price: 27,
  },
  {
    id: 5,
    image: img5,
    title: "Steak & Creamy Mash",
    category: ["Main Meals", "Hot Dishes"],
    price: 27,
  },
  {
    id: 6,
    image: img6,
    title: "Steak & Creamy Mash",
    category: ["Main Meals", "Hot Dishes"],
    price: 27,
  }
];

const AvailableMeals = () => {
  return (
    <>
      <ul className="products">
        {DUMMY_MEALS.map(meal => <MealItem meal= {meal}/>)}
      </ul>
    </>
  )
}

export default AvailableMeals;
