import React from "react";
import { useContext } from 'react'
import Intro from "./components/introduction/intro"
import About from "../src/components/about/about"
import ProductList from "../src/components/productList/productList"
import Contact from "./components/contact/Contact"
import Toggle from "./components/toggle/toggle"
import {ThemeContext } from './context'


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div 
    style={{ 
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white"
    }}
  >
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>
  );
};

export default App;

