import React from "react";
import CardItem from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="image/img-9.jpg"
              text="Eplore the hidden waterfall deep inside the amazone jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="image/img-6.jpg"
              text="Eplore the hidden waterfall deep inside the amazone jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="image/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="image/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="image/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Mystery"
              path="/products"
            />
            <CardItem
              src="image/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
