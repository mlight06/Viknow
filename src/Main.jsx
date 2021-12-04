/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export default function Main() {
  const [dishes, setDishes] = useState([]);
  const [dishName, setDishName] = useState('');
  function getDishes() {
    axios.get('/dishes')
      .then((response) => {
        console.log(response);
        setDishName(response);
      });
  }
  useEffect(() => {
    getDishes();
  }, []);
  return (
    <div>
      <div>
        Viknow
      </div>
      <div>
        <select name="dishType" id="dishType">
          <option value="Steak">Steak</option>
          <option value="Hamburger">Hamburger</option>
          <option value="Ribs">Ribs</option>
          <option value="Roast Beef">Roast Beef</option>
          <option value="Duck">Duck</option>
          <option value="Chicken">Chicken</option>
          <option value="Fish">Fish</option>
          <option value="Shellfish">Shellfish</option>
          <option value="Pork">Pork</option>
          <option value="Lamb">Lamb</option>
          <option value="Cheese">Cheese</option>
          <option value="Desserts">Desserts</option>
          <option value="Salty Snacks">Salty Snacks</option>
          <option value="Salads">Salads</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Pastas">Pastas</option>
        </select>
      </div>
    </div>
  );
}
