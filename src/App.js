import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import Main from "./Components/MainWithClass";
function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value = {themeHook}>
      <div>
        <Header />
        <Main />
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

