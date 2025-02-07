import React from "react";
import Navbar from "../../components/NavigationBar/Navbar";
import Hero from "../../components/Banner/Hero";
import Row from "../../components/Rows/Row";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <Row
        head="Today's"
        title="Flash Sales"
        fetchURL="https://dummyjson.com/products?sortBy=title&order=asc"
        rowID="1"
      />
    </div>
  );
};

export default Home;
