import React from "react";

const MealItem = props => {
  const meal = props.meal;
  const price = `$ ${meal.price.toFixed(2)}`;
  return (
    <li className="product-cat-mains">
      <a href="product.html">
        <img src={meal.image} alt="" className="respimg" />
      </a>
      <h4 className="product-title">
        <a href="product.html">{meal.metitle}</a>
      </h4>
      <ul className="product-cats">
        {meal.category.map((cat) => 
            <li key={cat}>
                <a href="shop.html#">{cat}</a>
            </li>
        )}
      </ul>
      <div className="product-price">
        <span>{price}</span>
        <a href="shop.html#">Add to cart</a>
      </div>
    </li>
  )
}

export default MealItem;
