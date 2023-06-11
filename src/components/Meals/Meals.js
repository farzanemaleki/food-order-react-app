import React from "react";

import "./Meals.css";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <section>
      <div className="triangle-decor"></div>
      <div className="container">
        <MealsSummary />
        <AvailableMeals />
      </div>
    </section>
  )
}

export default Meals;
