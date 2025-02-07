import React from "react";
import Navbar from "../../components/NavigationBar/Navbar";
import Hero from "../../components/Banner/Hero";
import Row from "../../components/Rows/Row";
import Newsletter from "../../components/newsletter/Newsletter";

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
        showCountdown={true}
        showSlideArrows={true}
        showDiscount={true}
        viewProduct={true}
        button=" View all product"
      />
      <Row
        head="Categories"
        title="Browse By Category"
        fetchURL="https://dummyjson.com/products/categories"
        rowID="2"
        showCountdown={false}
        showSlideArrows={true}
        showDiscount={false}
        viewProduct={false}
      />
      <Row
        head="This Month"
        title="Best Selling Products"
        fetchURL="https://dummyjson.com/products"
        rowID="3"
        showCountdown={false}
        showSlideArrows={true}
        viewProduct={true}
        button="View All"
      />
      <Newsletter />
    </div>
  );
};

export default Home;
