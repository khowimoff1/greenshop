import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Slick from "./Slick";
import { addItem } from "./CartMenu";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";
import { fetchData } from "../data/dataJson";

function valuetext(value) {
  return `${value}°C`;
}

const Home = ({ count, setCount }) => {
  const [singleClick, setSingleClick] = useState([]);
  const dispatch = useDispatch();
  const addCartShop = (item) => {
    if (!singleClick.includes(item.id)) {
      setSingleClick([...singleClick, item.id]);
      setCount(count + 1);
      dispatch(addItem(item));
    }
  };
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [sorting, setSorting] = useState(0);

  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setFlowers(data);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    fetchDataAsync();
  }, []);
  return (
    <div className="container mx-auto w-full px-4 max-w-6xl mt-6 md:p-0 ">
      <Slick />
      <div className="flex mb-20 mt-10">
        <div className="bg-gray-100 hidden md:flex md:flex-col  rounded py-2 px-4 w-[25%]">
          <h1 className="mb-3 font-bold text-lg">Catagories</h1>
          <ul className="flex flex-col ml-3 gap-4">
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-green-500 text-base font-bold ">
              <p>House Plants</p>
              <p>(33)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-base text-[#3D3D3D]">
              <p>Potter Plants</p>
              <p>(12)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-base text-[#3D3D3D]">
              <p>Seeds</p>
              <p>(65)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-base text-[#3D3D3D]">
              <p>Small Plants</p>
              <p>(39)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-base text-[#3D3D3D]">
              <p>Big Plants</p>
              <p>(23)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-base text-[#3D3D3D]">
              <p>Succulents</p>
              <p>(17)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-base text-[#3D3D3D]">
              <p>Trerrariums</p>
              <p>(19)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500 justify-between text-base text-[#3D3D3D]">
              <p>Gardening</p>
              <p>(13)</p>
            </li>
            <li className="flex cursor-pointer hover:text-green-500  justify-between text-base text-[#3D3D3D]">
              <p>Accessories</p>
              <p>(18)</p>
            </li>
          </ul>
          <h1 className="mb-3 font-bold text-lg mt-10">Price Range</h1>
          <div>
            <Box sx={{ width: 200 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={250}
                sx={{
                  color: "green",
                }}
              />
            </Box>
            <p className="text-sm text-[#3D3D3D] ml-3">
              Price:{" "}
              <span className="text-[#46A358]">
                ${value[0]}-${value[1]}
              </span>
            </p>
          </div>
          <button className="bg-green-500 hover:bg-green-300 w-[40%] ml-3 text-white rounded-lg py-2 px-5 mt-3">
            Filter
          </button>
          <h1 className="mb-3 font-bold text-lg mt-10">Size</h1>
          <ul className="flex flex-col ml-3 gap-4">
            <li className="flex justify-between text-base text-[#3D3D3D]">
              <p>Small</p>
              <p>(119)</p>
            </li>
            <li className="flex justify-between text-base text-[#3D3D3D]">
              <p>Medium</p>
              <p>(86)</p>
            </li>
            <li className="flex justify-between text-base text-[#3D3D3D]">
              <p>Large</p>
              <p>(78)</p>
            </li>
          </ul>
        </div>
        <div className="md:w-[75%] md:pl-12 mt-6 md:mt-0">
          <div className="flex justify-between items-center">
            <ul className="flex gap-3">
              <li
                onClick={() => setSorting(0)}
                className={`${
                  sorting === 0
                    ? "text-[#46A358] border-b-4 font-bold  border-green-600 pb-2"
                    : "text-[#3D3D3D] font-normal"
                } cursor-pointer text-sm  leading-4 `}
              >
                All Plants
              </li>
              <li
                onClick={() => setSorting(1)}
                className={`${
                  sorting === 1
                    ? "text-[#46A358] border-b-4 font-bold  border-green-600 pb-2"
                    : "text-[#3D3D3D] font-normal"
                } cursor-pointer text-sm  leading-4 `}
              >
                New Arrivals
              </li>
              <li
                onClick={() => setSorting(2)}
                className={`${
                  sorting === 2
                    ? "text-[#46A358] border-b-4 font-bold  border-green-600 pb-2"
                    : "text-[#3D3D3D] font-normal"
                } cursor-pointer text-sm  leading-4 `}
              >
                Sale
              </li>
            </ul>
            <div className="md:flex hidden  items-center">
              <p className="text-sm font-normal leading-4 text-[#3D3D3D]">
                Short by:
              </p>
              <select className="flex cursor-pointer items-center text-sm font-normal leading-4 text-[#3D3D3D]">
                <option>Default sorting</option>
              </select>
            </div>
          </div>
          {sorting === 0 && (
            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 ">
              {flowers.slice(0, 9).map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`${index % 2 != 0 ? "mt-5 md:mt-0" : ""}`}
                  >
                    <div className="bg-gray-100 rounded-2xl cursor-pointer">
                      <NavLink to={"/shop"}>
                        <img
                          onClick={() => addCartShop(item)}
                          src={item.image_url}
                          alt="img"
                          className="md:w-[250px] h-[150px] w-full rounded-t-lg md:h-[200px]"
                        />
                      </NavLink>
                      <div
                        onClick={() => addCartShop(item)}
                        className="text-green-600 hover:bg-green-200 hidden md:flex mt-1 bg-gray-200 py-2 justify-center relative "
                      >
                        <ShoppingCartIcon />
                      </div>
                    </div>
                    <h1 className="mt-4 cursor-default text-base font-normal leading-4 text-[#3D3D3D]">
                      {item.scientific_name}
                    </h1>
                    <h1 className="mt-1 cursor-default text-green-600 font-bold text-lg">
                      $ {item.id}.00
                    </h1>
                  </div>
                );
              })}
            </div>
          )}
          {sorting === 1 && (
            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 ">
              {flowers.slice(9, 18).map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`${index % 2 != 0 ? "mt-5 md:mt-0" : ""}`}
                  >
                    <div className="bg-gray-100 rounded-2xl cursor-pointer">
                      <NavLink to={"/shop"}>
                        <img
                          onClick={() => addCartShop(item)}
                          src={item.image_url}
                          alt="img"
                          className="md:w-[250px] h-[150px] w-full rounded-t-lg md:h-[200px]"
                        />
                      </NavLink>
                      <div
                        onClick={() => addCartShop(item)}
                        className="text-green-600 hover:bg-green-200 hidden md:flex mt-1 bg-gray-200 py-2 justify-center relative "
                      >
                        <ShoppingCartIcon />
                      </div>
                    </div>
                    <h1 className="mt-4 cursor-default text-base font-normal leading-4 text-[#3D3D3D]">
                      {item.scientific_name}
                    </h1>
                    <h1 className="mt-1 cursor-default text-green-600 font-bold text-lg">
                      $ {item.id}.00
                    </h1>
                  </div>
                );
              })}
            </div>
          )}
          {sorting === 2 && (
            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 ">
              {flowers.slice(2, 11).map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`${index % 2 != 0 ? "mt-5 md:mt-0" : ""}`}
                  >
                    <div className="bg-gray-100 rounded-2xl cursor-pointer">
                      <NavLink to={"/shop"}>
                        <img
                          onClick={() => addCartShop(item)}
                          src={item.image_url}
                          alt="img"
                          className="md:w-[250px] h-[150px] w-full rounded-t-lg md:h-[200px]"
                        />
                      </NavLink>
                      <div
                        onClick={() => addCartShop(item)}
                        className="text-green-600 hover:bg-green-200 hidden md:flex mt-1 bg-gray-200 py-2 justify-center relative "
                      >
                        <ShoppingCartIcon />
                      </div>
                    </div>
                    <h1 className="mt-4 cursor-default text-base font-normal leading-4 text-[#3D3D3D]">
                      {item.scientific_name}
                    </h1>
                    <h1 className="mt-1 cursor-default text-green-600 font-bold text-lg">
                      $ {item.id}.00
                    </h1>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:justify-center md:flex-row gap-10">
        <div className="flex rounded items-center bg-gray-100 py-6 px-0 pr-3">
          <div>
            {flowers.length > 5 && flowers[5].image_url && (
              <img
                src={flowers[5].image_url}
                alt="img"
                className="md:w-[200px] ml-10 rounded-xl w-[200px] h-[160px] md:h-[200px]"
              />
            )}
          </div>
          <div className="text-right space-y-3 pl-6">
            <h1 className="md:text-lg text-base font-black leading-6 text-right">
              SUMMER CACTUS <br /> & SUCCELENTS
            </h1>
            <p className="md:text-sm text-xs font-normal md:leading-6 text-[#727272] text-right">
              We are an online plant shop offering a wide <br /> range of cheap
              and trendy plants
            </p>
            <button className="bg-green-600 text-white py-2 px-3 rounded-lg">
              Find More
            </button>
          </div>
        </div>
        <div className="flex rounded items-center bg-gray-100 py-6 px-0 pr-3">
          <div>
            {flowers.length > 6 && flowers[6].image_url && (
              <img
                src={flowers[6].image_url}
                alt="img"
                className="md:w-[200px] ml-10 rounded-xl w-[200px] h-[160px] md:h-[200px]"
              />
            )}
          </div>
          <div className="text-right space-y-3 pl-6">
            <h1 className="md:text-lg text-base font-black leading-6 text-right">
              SUMMER CACTUS <br /> & SUCCELENTS
            </h1>
            <p className="md:text-sm text-xs font-normal md:leading-6 text-[#727272] text-right">
              We are an online plant shop offering a wide <br /> range of cheap
              and trendy plants
            </p>
            <button className="bg-green-600 text-white py-2 px-3 rounded-lg">
              Find More
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex flex-col gap-4 justify-center text-center">
          <h1 className="text-[30px] font-bold leading-4">Our Blog Posts</h1>
          <p className="text-sm leading-6 text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="md:flex md:justify-between grid grid-cols-2 md:gap-0 gap-4 mt-5">
          <div className="bg-gray-100 rounded-lg md:w-[22%]">
            <div className="bg-white flex justify-center h-[165px]  md:h-[150px] pb-3">
              {flowers.length > 5 && flowers[5].image_url && (
                <img
                  src={flowers[5].image_url}
                  alt="img"
                  className="rounded-xl"
                />
              )}
            </div>
            <div className=" space-y-1 p-4">
              <p className="text-green-600 font-medium text-sm">
                September 12 I Read in 6 minutes
              </p>
              <h1 className="font-bold text-[20px]">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-sm leading-6 text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="cursor-pointe hover:text-green-600">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg md:w-[22%]">
            <div className="bg-white flex justify-center h-[165px]  md:h-[150px] pb-3">
              {flowers.length > 2 && flowers[2].image_url && (
                <img
                  src={flowers[2].image_url}
                  alt="img"
                  className="rounded-xl"
                />
              )}
            </div>
            <div className=" space-y-1 p-4">
              <p className="text-green-600 font-medium text-sm">
                September 12 I Read in 6 minutes
              </p>
              <h1 className="font-bold text-[20px]">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-sm leading-6 text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="cursor-pointe hover:text-green-600">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg md:w-[22%]">
            <div className="bg-white flex justify-center h-[165px]  md:h-[150px] pb-3">
              {flowers.length > 0 && flowers[0].image_url && (
                <img
                  src={flowers[0].image_url}
                  alt="img"
                  className="rounded-xl md:mx-8 w-[100%]"
                />
              )}
            </div>
            <div className=" space-y-1 p-4">
              <p className="text-green-600 font-medium text-sm">
                September 12 I Read in 6 minutes
              </p>
              <h1 className="font-bold text-[20px]">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-sm leading-6 text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="cursor-pointe hover:text-green-600">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg md:w-[22%]">
            <div className="bg-white flex justify-center h-[165px]  md:h-[150px] pb-3">
              {flowers.length > 4 && flowers[4].image_url && (
                <img
                  src={flowers[4].image_url}
                  alt="img"
                  className="rounded-xl md:mx-8 w-[100%]"
                />
              )}
            </div>
            <div className=" space-y-1 p-4">
              <p className="text-green-600 font-medium text-sm">
                September 12 I Read in 6 minutes
              </p>
              <h1 className="font-bold text-[20px]">
                Cactus & Succulent Care Tips
              </h1>
              <p className="text-sm leading-6 text-[#727272]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="cursor-pointe hover:text-green-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
