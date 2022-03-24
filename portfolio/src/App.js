import React from "react";
import Intro from "./components/introduction/intro"
import About from "../src/components/about/about"
import ProductList from "../src/components/productList/productList"
import Contact from "./components/contact/Contact"
import Toggle from "./components/toggle/toggle"

function App() {
  return (
  <div>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
</div>
  );
}

export default App;

