import React from "react";
import Intro from "./components/introduction/intro"
import About from "../src/components/about/about"
import ProductList from "../src/components/productList/productList"
import Contact from "./components/contact/Contact"

function App() {
  return (
  <div>
    <Intro />
    <About />
    <ProductList />
    <Contact />
</div>
  );
}

export default App;

