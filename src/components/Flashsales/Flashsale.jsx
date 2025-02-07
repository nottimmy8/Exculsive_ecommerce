import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
const Flashsale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?sortBy=title&order=asc"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const targetDate = new Date("Feb 20, 2025 23:59:59").getTime();

    const countdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerText = "EXPIRED";
      }
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // slider

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="w-full mt-[100px] px-4 ">
      <div className="max-w-6xl mx-auto ">
        {/* head */}
        <div className="flex  items-center gap-4">
          <span className="bg-secondary rounded-md px-2 py-4"></span>{" "}
          <h2 className="text-base font-semibold text-secondary"> Today's</h2>
        </div>
        {/* subhead */}
        <div className="mt-[24px] flex justify-between items-center">
          <div className="flex gap-20 items-center">
            <h2 className=" font-semibold text-xl md:text-4xl font-poppins ">
              Flash Sales
            </h2>
            {/* countdown */}
            <div className="hidden gap-5 justify-end items-center md:flex ">
              <div>
                <span className=" font-medium text-sm">Days</span>
                <p id="days" className="text-3xl font-bold">
                  00
                </p>
              </div>

              <span className="text-4xl font-poppins font-bold text-secondary">
                {" "}
                :
              </span>

              <div>
                <span className=" font-medium text-sm">Hours</span>
                <p id="hours" className="text-3xl font-bold">
                  00
                </p>
              </div>

              <span className="text-4xl font-poppins font-bold text-secondary">
                {" "}
                :
              </span>

              <div>
                <span className=" font-medium text-sm">Minutes</span>
                <p id="minutes" className="text-3xl font-bold">
                  00
                </p>
              </div>

              <span className="text-4xl font-poppins font-bold text-secondary">
                {" "}
                :
              </span>

              <div>
                <span className=" font-medium text-sm">Second</span>
                <p id="seconds" className="text-3xl font-bold">
                  00
                </p>
              </div>
            </div>
          </div>
          {/* slidearrow */}
          <div className="flex items-center gap-2">
            <span>
              <FaArrowLeft
                onClick={slideLeft}
                size={30}
                className="bg-gray-300 p-2 rounded-full"
              />
            </span>
            <span>
              {" "}
              <FaArrowRight
                onClick={slideRight}
                size={30}
                className="bg-gray-300 p-2 rounded-full"
              />
            </span>
          </div>
        </div>
        {/* products */}
        <div className="">
          <div
            id={"slider"}
            className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide mt-5 "
          >
            {products.slice(6, 13).map((product) => (
              <div key={product.id} className="inline-block max-w-[270px]  m-2">
                <div className="flex flex-col   ">
                  <div className=" bg-gray-400 w-[270px] h-[250px]">
                    <img
                      src={product.images}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-base font-medium font-poppins  truncate ">
                      {product.title}
                    </h3>

                    <p className="text-lg font-semibold text-secondary">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashsale;
