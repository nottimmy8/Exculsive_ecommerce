import React, { useEffect, useState } from "react";
import Countdown from "../countdown/Countdown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TbEyeSearch } from "react-icons/tb";

import axios from "axios";

const Row = ({ title, head, rowID, fetchURL }) => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setProducts(response.data.products);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const discountPercentageOff = (discountPercentage) => {
    return discountPercentage ? discountPercentage.toFixed(0) : "0.00";
  };

  const handleLike = (productId) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [productId]: !prevLiked[productId],
    }));
  };
  return (
    <div className="w-full mt-[100px] px-4 ">
      <div className="max-w-6xl mx-auto ">
        {/* head */}
        <div className="flex  items-center gap-4">
          <span className="bg-secondary rounded-md px-2 py-4"></span>{" "}
          <h2 className="text-base font-semibold text-secondary">{head} </h2>
        </div>
        {/* subhead */}
        <div className="mt-[24px] flex justify-between items-center">
          <div className="flex gap-20 items-center">
            <h2 className=" font-semibold text-xl md:text-4xl font-poppins ">
              {title}
            </h2>
            <Countdown />
          </div>
          {/* slidearrow */}
          <div className="flex items-center gap-2">
            <span>
              <FaArrowLeft
                onClick={slideLeft}
                size={30}
                className="bg-gray-200 p-2 rounded-full opacity-50 hover:opacity-100 cursor-pointer"
              />
            </span>
            <span>
              {" "}
              <FaArrowRight
                onClick={slideRight}
                size={30}
                className="bg-gray-200 p-2 rounded-full opacity-50 hover:opacity-100 cursor-pointer"
              />
            </span>
          </div>
        </div>
        {/* products */}
        <div className="">
          <div
            id={"slider" + rowID}
            className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide mt-5 "
          >
            {products.slice(6, 13).map((product) => (
              <div key={product.id} className="inline-block max-w-[270px]  m-2">
                <div className="flex flex-col   ">
                  {/* imgcon */}
                  <div className="rounded-md bg-gray-200 w-[270px] h-[250px] relative group ">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    {/* cart */}
                    <div className=" hidden group-hover:block  rounded-md w-full  text-white text-base font-poppins p-2 text-center absolute bottom-0 bg-black  z-10">
                      Add to Cart
                    </div>
                    {/* discount */}
                    <div className="bg-secondary p-1 rounded-md absolute top-3 left-3 text-white">
                      -{discountPercentageOff(product.discountPercentage)}% off
                    </div>
                    {/* view/like */}
                    <div className=" absolute top-3 right-3 flex flex-col items-center justify-center gap-3">
                      <div onClick={() => handleLike(product.id)}>
                        {liked[product.id] ? (
                          <FaHeart size={20} className="" />
                        ) : (
                          <FaRegHeart size={20} className=" " />
                        )}
                      </div>
                      <div>
                        <TbEyeSearch size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
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

export default Row;
