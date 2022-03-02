import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import header 
import Header from "./Header";
import Filter from "./Filter"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData); 

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }



  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} mode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
