import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle the dark mode toggle
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Use the state variable to set the className
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
