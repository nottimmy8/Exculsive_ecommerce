import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className=" w-full ">
      <div className="max-w-6xl mx-auto h-[400px] flex gap-6">
        {/* rightbanner */}
        <div className="w-1/3 border-r border-gray-300  h-full hidden md:block ">
          <ul className=" flex flex-col pt-7 font-poppins font-medium ">
            <li className="hover:border-b border-gray-300 py-2 ">
              Women's Fashion
            </li>
            <li className="hover:border-b border-gray-300 py-2 ">
              Men's Fashion
            </li>
            <li className="hover:border-b border-gray-300 py-2 ">
              Electronics
            </li>
            <li className="hover:border-b border-gray-300 py-2 ">
              Home & Lifestyle
            </li>
            <li className="hover:border-b border-gray-300 py-2 ">Medicine</li>
            <li className="hover:border-b border-gray-300 py-2 ">
              Sports & Outdoor
            </li>
            <li className="hover:border-b border-gray-300 py-2">Baby's Toys</li>
            <li className="hover:border-b border-gray-300 py-2 ">
              Groceries & Pets
            </li>
            <li className="hover:border-b border-gray-300 py-2 ">
              Health & Beauty
            </li>
          </ul>
        </div>
        {/* leftbanner */}
        <div className="w-full h-full md:pt-7">
          <div className=" w-full px-6 rounded-md bg-black h-[370px] flex justify-between items-center ">
            <span className=" text-white">
              <h1 className="text-2xl font-poppins font-medium  ">
                Iphone 14 series
              </h1>
              <p className="text-6xl font-medium font-poppins  mt-4">
                Up to 10% Voucher Off{" "}
              </p>
              <button className=" border-b py-2 border-white mt-4">
                {" "}
                Shop Now
              </button>
            </span>
            <span>
              <img
                src={hero}
                alt=""
                className="w-[400px] h-full object-cover"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
