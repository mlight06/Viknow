/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import Hamburger from '../dist/Hamburger.png';

export default function Main() {
  const [dishName, setDishName] = useState('');
  const [wineType, setWineType] = useState([]);
  const [dishSelected, setDishSelected] = useState(false);
  const [suggestions, setSuggestions] = useState(0);
  const [chosenDish, setChosenDish] = useState(false);
  function getWines(e) {
    setDishName(e.target.value);
    axios.get('/wines', { params: { dish: e.target.value } })
      .then((response) => {
        setDishSelected(true);
        setChosenDish(true);
        setWineType(response.data.rows);
        setSuggestions(response.data.rows.length);
      });
  }

  return (
    <div>
      <div id="header">
        <img id="grapes" src="./images/grapes.jpeg" />
        Viknow
        <img id="grapes" src="./images/grapes.jpeg" />
      </div>
      <div id="welcome">
        Welcome! Viknow is an app designed to help you pick the perfect wine based on
        a range of popular dishes. Simply select a dish type from the drop down below, and Viknow
        will pick the best wine to compliment your dish.

      </div>
      <div id="Bon">Bon Appétit!</div>
      <div id="pickdish">Pick a Dish</div>
      <div id="dropdown">
        {' '}
        <select onChange={getWines} value={dishName} id="dishType">
          <option value="Pick a dish">Pick a dish</option>
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
      <div id="suggestion">
        {chosenDish
          ? (
            <div id="truesuggestion">
              Yum! Based on your selection of
              {' '}
              {dishName}
              , we have
              {' '}
              {suggestions}
              {' '}
              suggestion(s) for you!
            </div>
          ) : null}
      </div>
      <div>
        {dishSelected ? wineType.map((wine, index) => {
          const wineName = wine.type;
          console.log(wine.type, wineName);
          return (
            <div key={index} id="winebox">
              <div id="wine">{wine.type}</div>
              <div id="characteristics">{wine.characteristics}</div>
              <img id="winephoto" src={`./images/${dishName}_${wineName}.png`} />
            </div>
          );
        })
          : null}
      </div>
      {/* <div id="owned">An app created by Michael Light, December 2021</div> */}
    </div>
  );
}
