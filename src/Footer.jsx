import React from "react";
import logo from "../public/logoo.svg";
import location from "../public/Location.svg";
import message from "../public/Message.svg";
import calling from "../public/Calling.svg";
import facebook from "../public/Facebook.svg";
import instagram from "../public/Instagram.svg";
import twitter from "../public/Twitter.svg";
import linkedin from "../public/Linkedin.svg";
import union from "../public/Union.svg";
import plasticCard from "../public/image 16.svg";
import { NavLink } from "react-router-dom";
import { Json } from "./page/Json";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto w-full bg-[#FBFBFB] py-8  rounded-lg max-w-6xl mt-[100px] mb-5">
        <div className="md:flex px-8 mb-4 items-center">
          <div className="md:flex hidden">
            <div className="px-5 border-r-2">
              <img src={Json[0].image} alt="img" width={"150px"} />
              <h1 className="mt-3 font-bold text-[17px]">Garden Care</h1>
              <p className="text-[#727272] mt-2">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="px-5 border-r-2">
              <img
                src={Json[4].image}
                alt="img"
                width={"150px"}
                className="h-[137px]"
              />
              <h1 className="mt-3 font-bold text-[17px]">Plant Renovation</h1>
              <p className="text-[#727272] mt-2">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="px-5 ">
              <img
                src={Json[5].image}
                alt="img"
                width={"150px"}
                className="h-[137px]"
              />
              <h1 className="mt-3 font-bold text-[17px]">Watering Graden</h1>
              <p className="text-[#727272] mt-2">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="md:w-[75%]">
            <h2 className="text-lg font-bold">
              Would you like to join newsletters?
            </h2>
            <form className="flex  mt-3">
              <input
                className="flex-grow border-2 outline-none rounded-l-lg p-2"
                type="email"
                placeholder="enter your email address"
              />
              <button
                className="hover:bg-green-300 bg-green-500 text-white px-4 rounded-r-lg"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Join
              </button>
            </form>
            <p className="mt-4 text-[#727272] text-[13px]">
              We usually post offers and challenges in newsletter. We're your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our ( green )
              house to yours!
            </p>
          </div>
        </div>
        <div className="mt-8 pl-8 py-5 flex md:flex-row flex-col gap-5 md:gap-16 bg-green-200">
          <img src={logo} alt="" className="w-[150px]" />
          <div className="flex gap-3 items-center">
            <img src={location} alt="ls" />
            <p className="text-sm text-[#3D3D3D]">
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={message} alt="ls" />
            <a className="text-sm text-[#3D3D3D] cursor-pointer">
              xoshimovsardorbek@gmail.com
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <img src={calling} alt="ls" />
            <a className="text-sm cursor-pointer text-[#3D3D3D]">
              +998 77 077 04 03
            </a>
          </div>
        </div>
        <div className="mt-12 px-8 md:flex gap-10 md:gap-0 grid grid-cols-2 justify-between">
          <div>
            <h1 className="font-bold text-lg">My Account</h1>
            <ul className=" space-y-2 mt-3 flex flex-col">
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                My account
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Our Stores
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Contact Us
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Career
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Specials
              </NavLink>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg">Help & Guide</h1>
            <ul className=" space-y-2 mt-3 flex flex-col">
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Help Center
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                How to Buy
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Shipping & Delivery
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Product Policy
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                How to Return
              </NavLink>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg">Categories</h1>
            <ul className=" space-y-2 mt-3 flex flex-col">
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                House Plants
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Potter Plants
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Seeds
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Small Plants
              </NavLink>
              <NavLink className="text-sm text-[#3D3D3D] hover:text-green-600">
                Accessories
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-lg">Social Media</h1>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://facebook.com"
                  className="py-3 px-4 cursor-pointer border border-green-300 rounded-lg hover:bg-yellow-300"
                >
                  <img src={facebook} alt="img" />
                </a>
                <a
                  href="https://instagram.com"
                  className="py-3 px-4 cursor-pointer border border-green-300 rounded-lg hover:bg-yellow-300"
                >
                  <img src={instagram} alt="img" />
                </a>
                <a
                  href="https://twitter.com"
                  className="py-3 px-4 cursor-pointer border border-green-300 rounded-lg hover:bg-yellow-300"
                >
                  <img src={twitter} alt="img" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="py-3 px-4 cursor-pointer border border-green-300 rounded-lg hover:bg-yellow-300"
                >
                  <img src={linkedin} alt="img" />
                </a>
                <a
                  href="https://youtobe.com"
                  className="py-3 px-4 cursor-pointer border border-green-300 rounded-lg hover:bg-yellow-300"
                >
                  <img src={union} alt="img" />
                </a>
                
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">We accept</h1>
              <img src={plasticCard} alt="plastix" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center mb-12">
        <p className="text-sm text-[#3D3D3D] leading-[30px]">
          © 2024 GreenShop.By Xoshimov Sardorbek.
        </p>
      </div>
    </div>
  );
};

export default Footer;
