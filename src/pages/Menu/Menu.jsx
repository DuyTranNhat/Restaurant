import React from "react";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import CategoryPartition from "./CategoryPartition";
import Breakfast from "~/utils/img/breakfast.jpg";
import Lunch from "~/utils/img/lunch.jpg";
import Dinner from "~/utils/img/dinner.jpg";
import Dessert from "~/utils/img/dessert.jpg";

const cx = classNames.bind(styles);

const breakfast = [
  {
    id: 1,
    name: "English Breakfast",
    description:
      "smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs",
    price: "£12",
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "poached egg, avocado, onion, tomatoes, bread",
    price: "£8",
  },
  {
    id: 3,
    name: "Burrito",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
];

const lunch = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "chicken breast, romaine lettuce, croutons, parmesan",
    price: "£15",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "spaghetti, pancetta, garlic, eggs, parmesan, pepper",
    price: "£14",
  },
  {
    id: 3,
    name: "Pizza",
    description: "chorizo, italian salami, tomatoes, mushrooms, olives",
    price: "£12",
  },
];

const dinner = [
  {
    id: 1,
    name: "Spicy Beef",
    description: "spicy beef, potatoes, carrots, cheese sauce, spices",
    price: "£17",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description: "onion, carrot, celery, minced meat, spaghetti, parmesan",
    price: "£15",
  },
  {
    id: 3,
    name: "Chickpea Curry",
    description: "onion, chickpea, garlic, mushrooms, tomatoes, spices",
    price: "£12",
  },
];

const dessert = [
  {
    id: 1,
    name: "Lemon Cake",
    description: "flour, sugar, baking powder, lemon",
    price: "£9",
  },
  {
    id: 2,
    name: "Cinnamon Rolls",
    description: "flour, salt, sugar, cinnamon, yeast, sour cream, milk",
    price: "£11",
  },
  {
    id: 3,
    name: "Vegan Pancakes",
    description: "flour, sugar, baking powder, soya milk, blueberries",
    price: "£8",
  },
];

function Menu() {
  const classNames = cx("wrapper");
  console.log(styles);

  return (
    <div className={classNames}>
      <div
        className={cx(
          "header",
          "mt-3 d-flex justify-content-center align-items-center"
        )}
      >
        <h1 className={cx("title", "text-light fw-bold mt-3")}>Menu</h1>
      </div>

      <CategoryPartition infoFoodList={breakfast} heading='Breakfast' img={Breakfast} />
      <CategoryPartition bgDark infoFoodList={lunch} heading='Lunch' img={Lunch} isReserve/>
      <CategoryPartition infoFoodList={dinner} heading='dinner' img={Dinner} />
      <CategoryPartition bgDark infoFoodList={dessert} heading='dessert' img={Dessert} isReserve/>
    </div>
  );
}

export default Menu;
