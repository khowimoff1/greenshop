import React, { useEffect, useState } from "react";
import logo from "../public/Logo.svg";
import logo0 from "../public/Logo (1).svg";
import search from "../public/Vector.svg";
import korzinka from "../public/Vector (1).svg";
import loginn from "../public/Logout.svg";
import respons from "../public/Filter.svg";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { addItem } from "./page/CartMenu";

import { Flowers } from "./json/Flowers";

const Header = ({ setShopCart, count, setCount }) => {
  const [inputSearch, setInputSearch] = useState("hidden");
  const searchClick = () => {
    setInputSearch("flex");
  };
  const closeClick = () => {
    setInputSearch("hidden");
    setSearchInputV("hidden");
  };
  const [loginPage, setLoginPage] = useState("hidden");
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const LoginPage = () => {
    setLogin(true);
    setRegister(false);
  };
  const RegisterPage = () => {
    setRegister(true);
    setLogin(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginPage("hidden");
  };
  const [searchInput, setSearchInput] = useState("");
  const [searchInputV, setSearchInputV] = useState("hidden");
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      setSearchInputV("");
    } else {
      setSearchInputV("hidden");
    }
  };
  const Search = (e) => {
    e.preventDefault();
    setSearchInput("");
  };
  const [singleClick, setSingleClick] = useState([]);
  const dispatch = useDispatch();
  const addCartShop = (item) => {
    if (!singleClick.includes(item.id)) {
      setSingleClick([...singleClick, item.id]);
      dispatch(addItem(item));
      setInputSearch("hidden");
      setSearchInputV("hidden");
    }
  };

  return (
    <>
      <div className="hidden container mx-auto w-full max-w-6xl pb-7 pt-10 md:flex items-center justify-between py-4">
        <div className="flex justify-between border-b pb-4 border-green-200 w-full py-5 items-center bg-white z-20 max-w-6xl fixed">
          <img src={logo} alt="logo" width={"150px"} />
          <ul className="flex gap-10">
            <li className="nav font-normal text-base text-[#3D3D3D] hover:text-black">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav font-normal text-base text-[#3D3D3D] hover:text-black">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="nav font-normal text-base text-[#3D3D3D] hover:text-black">
              <NavLink to="/plan">Plan</NavLink>
            </li>
            <li className="nav font-normal text-base text-[#3D3D3D] hover:text-black">
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button onClick={searchClick}>
              <img src={search} alt="search" width={"20px"} />
            </button>
            <NavLink
              to={"/shop"}
              onClick={() => {
                setShopCart(true);
              }}
            >
              <div className=" absolute top-3 right-[110px] bg-green-600 rounded-full text-white px-2 ">
                {count}
              </div>
              <img src={korzinka} alt="korzinka" width={"20px"} />
            </NavLink>
            <button
              onClick={() => {
                setLoginPage("");
              }}
              className="flex items-center bg-green-600 hover:bg-green-700 px-5 py-2 gap-2 rounded-lg text-white"
            >
              <img src={loginn} alt="search" width={"20px"} />
              Login
            </button>
          </div>
          <form
            onSubmit={Search}
            value={searchInput}
            onChange={handleSearch}
            className={`${inputSearch} justify-between backdrop-blur-md rounded-t-lg absolute container mx-auto w-full max-w-6xl bg-green-700 bg-opacity-35 px-4 py-5`}
          >
            <label id="search" className="flex w-full">
              <input
                name="search"
                type="searach"
                placeholder="Search"
                className="w-[90%] placeholder-white text-lg bg-transparent outline-none text-green-900"
              />
              <input
                type="button"
                onClick={closeClick}
                value="CANCEL"
                className="bg-green-800 hover:bg-green-500 text-white px-3 py-2 rounded-lg"
              />
            </label>
          </form>
          <div
            className={`${searchInputV} bg-opacity-40 absolute z-10 rounded-b-2xl py-4 px-4 container mx-auto max-w-6xl bg-black w-full top-20`}
          >
            <div className="min-h-16 space-y-2">
              {Flowers.map((item) =>
                item.scientific_name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) &&
                searchInput.length > 1 ? (
                  <NavLink
                    to={"/shop"}
                    key={item.id}
                    onClick={() => {
                      addCartShop(item);
                    }}
                    className="flex bg-white py-2 px-3 items-center gap-10 hover:bg-green-500 hover:text-white rounded-xl cursor-pointer"
                  >
                    <div>
                      <img
                        src={item.image_url}
                        alt=""
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                    </div>
                    <h1>{item.scientific_name}</h1>
                  </NavLink>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:hidden justify-between px-4 py-7">
        <label id="search_res" className="bg-gray-100 rounded-xl p-4 w-4/5">
          <input
            className=" bg-transparent outline-none text-green-700 w-full"
            type="search"
            name="search_res"
            placeholder="Find your plan"
          />
        </label>
        <button className="bg-green-800 hover:bg-green-500 text-white rounded-xl px-3">
          <img src={respons} width={"25px"} height={"22px"} />
        </button>
      </div>
      <div
        className={`w-screen justify-end pr-4 hidden md:hidden absolute top-7}`}
      >
        <div className="bg-transparent w-4/5 flex justify-center rounded-xl backdrop-blur-lg px-2 py-4">
          <ul className="flex flex-col w-full text-center">
            <NavLink
              to="/"
              onClick={() => {
                setIsLink("");
              }}
              className="nav_res font-normal bg-green-900 p-3 rounded-t-xl border-b text-base text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => {
                setIsLink("");
              }}
              className="nav_res font-normal bg-green-900 p-3 border-b text-base text-white"
            >
              Shop
            </NavLink>
            <NavLink
              to="/plan"
              onClick={() => {
                setIsLink("");
              }}
              className="nav_res font-normal bg-green-900 p-3 border-b text-base text-white"
            >
              Plan
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => {
                setIsLink("");
              }}
              className="nav_res font-normal bg-green-900 p-3 rounded-b-xl border-b text-base text-white"
            >
              Blog
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="md:hidden  flex fixed bg-gray-200 rounded-t-[40px] bottom-0 py-10 w-full justify-around shadow-md ">
        <NavLink to={"/"} className="res_nav text-gray-500">
          <HomeIcon />
        </NavLink>
        <NavLink to={"/plan"} className="res_nav text-gray-500">
          <FavoriteIcon />
        </NavLink>
        <NavLink to={"/shop"} className="res_nav text-gray-500">
          <LocalGroceryStoreIcon />
        </NavLink>
        <button
          onClick={() => {
            setLoginPage("");
          }}
          className="text-gray-500"
        >
          <PersonIcon />
        </button>
      </div>
      <div
        className={`${loginPage} w-full z-50 flex md:items-center justify-center h-screen fixed md:bg-gray-400 bg-white top-0 md:bg-opacity-45`}
      >
        <div className="bg-white rounded-2xl flex flex-col text-center py-10 px-32">
          <div className="md:flex hidden items-center justify-center gap-10">
            <h1
              onClick={LoginPage}
              className={`cursor-pointer text-[20px]  font-medium ${
                login ? "text-green-500" : ""
              }`}
            >
              Login
            </h1>
            <span className="block w-1 h-5 bg-green-600"></span>
            <h1
              onClick={RegisterPage}
              className={`cursor-pointer text-[20px]  font-medium ${
                register ? "text-green-500" : ""
              }`}
            >
              Register
            </h1>
          </div>
          <img src={logo0} alt="logo" className="md:hidden px-10" />
          {login && (
            <form
              onSubmit={handleSubmit}
              className="flex md:w-auto w-screen md:px-0 px-10  flex-col mt-10"
            >
              <h1 className="text-lg md:flex hidden text-gray-400 font-medium mb-3">
                Enter your username and password to login.
              </h1>
              <h1 className="mt-10 md:hidden font-bold mb-7 text-xl">Login</h1>
              <input
                className="border border-green-600 py-2 px-2 rounded-lg"
                type="text"
                placeholder="example@example.com"
              />
              <input
                className="border border-green-600 py-2 px-2 rounded-lg mt-3"
                type="password"
                placeholder="Password"
              />
              <div className="flex justify-end">
                <p className=" text-green-700">Forgot Password?</p>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white text-lg rounded-lg py-4 md:py-3 mt-10"
              >
                Login
              </button>
              <p
                onClick={RegisterPage}
                className="mt-10 text-[15px] md:hidden font-semibold text-green-300"
              >
                Don’t have an account?{" "}
                <span className=" cursor-pointer font-bold text-green-600">
                  Sign Up
                </span>
              </p>
            </form>
          )}
          {register && (
            <form
              onSubmit={handleSubmit}
              className="flex md:w-auto w-screen md:px-0 px-10  flex-col mt-10"
            >
              <h1 className="text-lg md:flex hidden text-gray-400 font-medium mb-3">
                Enter your email and password to register.
              </h1>
              <h1 className="mt-10 md:hidden font-bold mb-7 text-xl">
                Register
              </h1>
              <input
                className="border border-green-600 py-2 px-2 rounded-lg"
                type="text"
                placeholder="Username"
              />
              <input
                className="border mt-3 border-green-600 py-2 px-2 rounded-lg"
                type="text"
                placeholder="Enter your email address"
              />
              <input
                className="border border-green-600 py-2 px-2 rounded-lg mt-3"
                type="password"
                placeholder="Password"
              />
              <input
                className="border border-green-600 py-2 px-2 rounded-lg mt-3"
                type="password"
                placeholder="Confirm Password"
              />
              <button
                type="submit"
                className="bg-green-600 text-white text-lg rounded-lg py-4 md:py-3 mt-10"
              >
                Create an account
              </button>
              <p
                onClick={LoginPage}
                className="mt-10 text-[15px] md:hidden font-semibold text-green-300"
              >
                Already have an account
                <span className=" cursor-pointer font-bold text-green-600">
                  Login
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
