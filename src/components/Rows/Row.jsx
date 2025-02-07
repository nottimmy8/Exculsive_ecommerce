import React, { useEffect, useState } from "react";
import Countdown from "../countdown/Countdown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { TbEyeSearch } from "react-icons/tb";

import axios from "axios";

const Row = ({
  button,
  title,
  head,
  rowID,
  fetchURL,
  showCountdown,
  showSlideArrows,
  showDiscount,
  viewProduct,
}) => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (rowID !== "2") {
      axios.get(fetchURL).then((response) => {
        setProducts(response.data.products);
      });
    } else {
      axios.get(fetchURL).then((response) => {
        setCategories(response.data);
      });
    }
  }, [fetchURL, rowID]);

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

  const calculateDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage) / 100;
  };

  const handleLike = (productId) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [productId]: !prevLiked[productId],
    }));
  };
  return (
    <div className="w-full mt-[80px] px-4 ">
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
            {showCountdown && <Countdown />}
          </div>
          {/* slidearrow */}
          {showSlideArrows && (
            <div className="flex items-center gap-2">
              <span>
                <FaArrowLeft
                  onClick={slideLeft}
                  size={30}
                  className="bg-gray-200 p-2 rounded-full opacity-50 hover:opacity-100 cursor-pointer"
                />
              </span>
              <span>
                <FaArrowRight
                  onClick={slideRight}
                  size={30}
                  className="bg-gray-200 p-2 rounded-full opacity-50 hover:opacity-100 cursor-pointer"
                />
              </span>
            </div>
          )}
        </div>
        {/* products */}
        <div className="">
          {rowID !== "2" ? (
            <div
              id={"slider" + rowID}
              className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide mt-5 "
            >
              {products.slice(6, 15).map((product) => (
                <div
                  key={product.id}
                  className="inline-block max-w-[270px]  m-2"
                >
                  <div className="flex flex-col   ">
                    {/* imgcon */}
                    <div className="rounded-md bg-gray-200 w-[270px] h-[250px] relative group ">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      {/* cart */}
                      <div className=" hidden group-hover:block  rounded-b-md w-full  text-white text-base font-poppins p-2 text-center absolute bottom-0 bg-black  z-10">
                        Add to Cart
                      </div>
                      {/* discount */}
                      {showDiscount && (
                        <div className="bg-secondary p-1 rounded-md absolute top-3 left-3 text-white">
                          -{discountPercentageOff(product.discountPercentage)}%
                          off
                        </div>
                      )}
                      {/* view/like */}
                      <div className=" absolute top-3 right-3 flex flex-col items-center justify-center gap-3">
                        <div
                          onClick={() => handleLike(product.id)}
                          className=" bg-white rounded-full p-1"
                        >
                          {liked[product.id] ? (
                            <IoHeartSharp
                              size={20}
                              className="text-secondary  "
                            />
                          ) : (
                            <IoHeartOutline size={20} className=" " />
                          )}
                        </div>
                        <div className=" bg-white rounded-full p-1">
                          <TbEyeSearch size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <h3 className="text-base font-medium font-poppins  truncate ">
                        {product.title}
                      </h3>

                      <div className="flex  items-center gap-4 ">
                        {showDiscount && (
                          <p className="text-base font-medium font-poppins text-secondary">
                            $
                            {calculateDiscountedPrice(
                              product.price,
                              product.discountPercentage
                            ).toFixed(0)}
                          </p>
                        )}
                        <p className="  text-base font-medium font-poppins text-gray-700">
                          ${product.price.toFixed(0)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              id={"slider" + rowID}
              className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide mt-5 "
            >
              {/* content for rowID 2  */}
              {categories.slice(0, 22).map(({ name, index }) => (
                <div
                  key={index}
                  className="inline-block w-[170px]  border border-gray-300  h-[150px]  m-2"
                >
                  <h3 className="text-base font-medium font-poppins truncate">
                    {name}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" flex flex-col items-center justify-center py-12 border-b border-gray-300">
          {viewProduct && (
            <button className=" text-center text-white font-poppins text-base font-normal bg-secondary rounded-md px-4 py-2">
              {button}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Row;
