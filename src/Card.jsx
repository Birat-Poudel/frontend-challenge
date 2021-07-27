import React, { useState } from "react";
import heartOutline from "./assets/heart-outline.png";
import heartFill from "./assets/heart-fill.png";
import expandMore from "./assets/expand_more.svg";
import "./Card.css";

function Card(props) {
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(props.likeCount);
  const [liked, setLiked] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
    setShow(!show);
  };

  const decreaseLike = () => {
    setCount(count - 1);
    setLiked(!liked);
  };

  const increaseLike = () => {
    setCount(count + 1);
    setLiked(!liked);
  };

  return (
    <div className="card">
      <img className="card__image" src={props.image} alt="food" />

      <div className="card__body">
        <h3>{props.title}</h3>
        <div className="card__like">
          {liked ? (
            <img
              className="card__like__icon"
              onClick={decreaseLike}
              src={heartFill}
              alt="Logo"
            />
          ) : (
            <img
              className="card__like__icon"
              onClick={increaseLike}
              src={heartOutline}
              alt="Logo"
            />
          )}
          <div className="like__text">
            <b>{count}</b>
          </div>
        </div>
      </div>

      <div className="card__description">{props.description}</div>

      {display ? (
        <div className="menu__details">
          <div className="information">{props.information}</div>
          <div className="menu__items menu__items__one">
            <div className="menuItem">{props.menuItemOne}</div>
            <div className="menuItemPrice">Rs. {props.menuItemOnePrice}</div>
          </div>
          <div className="menu__items menu__items__two">
            <div className="menuItem">{props.menuItemTwo}</div>
            <div className="menuItemPrice">Rs. {props.menuItemTwoPrice}</div>
          </div>
          <div className="menu__items menu__items__three">
            <div className="menuItem">{props.menuItemThree}</div>
            <div className="menuItemPrice">Rs. {props.menuItemThreePrice}</div>
          </div>
          <div className="menu__items menu__items__four">
            <div className="menuItem">{props.menuItemFour}</div>
            <div className="menuItemPrice">Rs. {props.menuItemFourPrice}</div>
          </div>
        </div>
      ) : null}

      {show ? (
        <img
          className="expand__more"
          onClick={handleDisplay}
          src={expandMore}
          alt="expand more"
        />
      ) : (
        <img
          className="expand__less"
          onClick={handleDisplay}
          src={expandMore}
          alt="expand less"
        />
      )}
    </div>
  );
}

export default Card;
