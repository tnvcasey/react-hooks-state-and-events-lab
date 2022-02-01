import React from "react";
import { useState } from "react"

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  function cartPutter(){
    setCart(!inCart)
  }

  const cartWords = inCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartPutter}>{cartWords}</button>
    </li>
  );
}

export default Item;
