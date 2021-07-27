import React from "react";
import Card from "./Card";
import "./CardList.css";
import pastry from "./assets/pastry.png";
import burger from "./assets/Burgers.png";
import pancake from "./assets/pancake.png";

const CardList = (props) => {
  return (
    <div className="card__list">
      <Card
        title="Pastry"
        image={pastry}
        description="Pastry is a dough of flour, water and shortening that may be savoury or sweetened."
        liked={true}
        likeCount={87}
        information="Price Per Plate: "
        menuItemOne="Chocolate Pastry"
        menuItemOnePrice={120}
        menuItemTwo="Vanilla Pastry"
        menuItemTwoPrice={120}
        menuItemThree="Strawberry Pastry"
        menuItemThreePrice={120}
        menuItemFour="Double Chocolate Pastry"
        menuItemFourPrice={200}
      />

      <Card
        title="Burgers"
        image={burger}
        description="A Burger is a sandwich consisting of a cooked patty on a bun or roll. The patty maybe fried, grilled or smoked."
        liked={false}
        likeCount={76}
        information="Price Per Plate: "
        menuItemOne="Chicken Burger"
        menuItemOnePrice={150}
        menuItemTwo="Mutton Burger"
        menuItemTwoPrice={180}
        menuItemThree="Veg Burger"
        menuItemThreePrice={130}
        menuItemFour="Buff Burger"
        menuItemFourPrice={130}
      />

      <Card
        title="Pancake"
        image={pancake}
        description="A Pancake is a thin, flat, circular piece of cooked batter made from milk, flour and eggs."
        liked={false}
        likeCount={34}
        information="Price Per Plate: "
        menuItemOne="Classic Pancake"
        menuItemOnePrice={150}
        menuItemTwo="Cheese Pancake"
        menuItemTwoPrice={180}
        menuItemThree="Chocolate Pancake"
        menuItemThreePrice={180}
        menuItemFour="Double Cheese Pancake"
        menuItemFourPrice={200}
      />
    </div>
  );
};

export default CardList;
