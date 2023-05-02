import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import AboutUs from "../components/AboutUs";
import HomeHero from "../components/HomeHero";

const Home = () => {
  return (
    <div className="container">
      <HomeHero/>
      <CategoryMenu />
      <ProductList />
      <Cart />
      <AboutUs />
    </div>
  );
};

export default Home;
