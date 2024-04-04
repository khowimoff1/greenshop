import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./CartMenu";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Json } from "./Json";
const Shop = ({ shopCart, setShopCart,count,setCount }) => {
  const [resCart, setResCart] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector((e) => e.flowers);
  const [selectCout,setSelectCout] = useState(1);
  const increment = () => {
     setSelectCout(selectCout + 1)
  }
  const decrement = () => {
    if(selectCout > 1){
      setSelectCout(selectCout - 1);
    }
  };

  return (
    <div className="container mx-auto w-full max-w-6xl px-4 md:mt-10">
      {!shopCart && select.length > 0 && (
        <div>
          <div className="md:hidden mt-4 flex justify-center">
            <img src={select[0].image} alt="image" className="w-[150px] h-[130px]" />
          </div>
          <div className="flex justify-between cursor-pointer ">
            <div className="md:flex hidden items-center gap-10 ">
              <div className=" space-y-2">
                <div className="bg-[#FBFBFB] rounded p-4">
                  <img src={select[0].image} alt="img" className="w-24 h-20" />
                </div>
                <div className="bg-[#FBFBFB] rounded p-4">
                  <img src={select[0].image} alt="img" className="w-24 h-20" />
                </div>
                <div className="bg-[#FBFBFB] rounded p-4">
                  <img src={select[0].image} alt="img" className="w-24 h-20" />
                </div>
                <div className="bg-[#FBFBFB] rounded p-4">
                  <img src={select[0].image} alt="img" className="w-24 h-20" />
                </div>
              </div>
              <div className="bg-[#FBFBFB] p-10 h-full flex items-center">
                <img src={select[0].image} alt="img" className="w-56 h-56" />
              </div>
            </div>
            <div className="md:w-2/4 flex flex-col justify-between">
              <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal">
                <h1 className=" md:text-[28px] text-[20px] font-medium md:font-bold leading-4">
                  {select[0].name}
                </h1>
                <div className="flex justify-between mt-5 md:w-full  border-b pb-4 items-center">
                  <h1 className="text-green-500 md:block hidden text-[22px] font-bold leading-4">
                    ${select[0].price}.00
                  </h1>
                  <div className="md:flex hidden  gap-2 items-center">
                    <Stack spacing={1}>
                      <Rating name="size-medium" defaultValue={2} />
                    </Stack>
                    <p className="text-[15px] text-[#3D3D3D] leading-4">
                      19 Customer Review
                    </p>
                  </div>
                  <p className="text-[15px] block md:hidden text-[#3D3D3D] leading-4">
                    (19)
                  </p>
                </div>
              </div>
              <h1 className="md:flex hidden font-medium text-[15px] text-[#3D3D3D]  mt-3">
                Short Description:
              </h1>
              <p className="text-[12px] text-[#727272] mt-5 pr-4 md:mt-0">
                {select[0].description}
              </p>
              <h1 className="font-medium text-[15px] md:mt-0 mt-5 md:mb-0 mb-3 text-[#3D3D3D]">
                Size:
              </h1>
              <div className="flex gap-2">
                <div className="py-2 cursor-pointer px-6 font-bold text-lg text-[#46A358] border border-green-600 flex rounded-full w-9 justify-center">
                  S
                </div>
                <div className="py-2 hover:border-green-600 cursor-pointer px-6 font-bold text-lg text-[#46A358] border flex rounded-full w-9 justify-center">
                  M
                </div>
                <div className="py-2 hover:border-green-600 cursor-pointer px-6 font-bold text-lg text-[#46A358] border flex rounded-full w-9 justify-center">
                  L
                </div>
                <div className="py-2 hover:border-green-600 cursor-pointer px-6 font-bold text-lg text-[#46A358] border flex rounded-full w-9 justify-center">
                  XL
                </div>
              </div>
              <div className="md:flex hidden gap-5">
                <div className="flex items-center gap-6">
                  <button
                    onClick={decrement}
                    className="hover:bg-green-800 bg-green-600 rounded-full text-white pb-3 px-4 text-5xl  items-center justify-center "
                  >
                    -
                  </button>
                  <p className=" text-[20px] leading-[10px] font-normal">
                    {selectCout}
                  </p>
                  <button
                    onClick={increment}
                    className="hover:bg-green-800 bg-green-600 rounded-full text-white pb-3 py-2 px-3 text-4xl  items-center justify-center "
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => setShopCart(true)}
                  className="text-sm font-bold leading-[20px] bg-green-600 hover:bg-green-400 text-white py-3 px-14 rounded-lg"
                >
                  BUY NOW
                </button>
                <button className="text-sm font-bold leading-[20px] text-green-600 border hover:bg-green-600 hover:text-white border-green-600 py-3 px-10 rounded-lg">
                  ADD TO CART
                </button>
              </div>
              <div className="md:space-y-1 space-y-2 md:mb-0 mb-5 md:mt-0 mt-5">
                <h1 className="text-[sm] text-gray-400 leading-4">
                  SKU: <span className="text-gray-500">1995751877966</span>
                </h1>
                <h1 className="text-[sm] text-gray-400 leading-4">
                  Categories:{" "}
                  <span className="text-gray-500">Potter Plants</span>
                </h1>
                <h1 className="text-[sm] text-gray-400 leading-4">
                  Tags:{" "}
                  <span className="text-gray-500">Home, Garden, Plants</span>
                </h1>
              </div>
              <div className="flex">
                <h1>Share this products:</h1>
                <div className="flex gap-2 ml-2">
                  <div className="hover:text-green-600 cursor-pointer">
                    <FacebookIcon />
                  </div>
                  <div className="hover:text-green-600 cursor-pointer">
                    <TwitterIcon />
                  </div>
                  <div className="hover:text-green-600 cursor-pointer">
                    <LinkedInIcon />
                  </div>
                  <div className="hover:text-green-600 cursor-pointer">
                    <EmailOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex gap-5 border-b">
              <h1 className="cursor-pointer hover:text-green-600 text-[17px] font-bold leading-4 text-green-600 border-b-4 border-green-700 pb-4">
                Product Description
              </h1>
              <h1 className="cursor-pointer hover:text-green-600 text-[17px] font-bold leading-4 text-gray-500">
                Reviews (19)
              </h1>
            </div>
            <div className="mt-10">
              <p className="text-sm text-[#727272]">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nam fringilla augue nec est tristique auctor.
                Donec non est at libero vulputate rutrum. Morbi ornare lectus
                quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla.
                <br />
                <br />
                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                eget sagittis vulputate, sapien libero hendrerit est, sed
                commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed tempor, lorem et placerat
                vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
                mi. Cras neque metus, consequat et blandit et, luctus a nunc.
                Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground.
              </p>
            </div>
            <div className="mt-10">
              <h1 className=" font-bold text-sm">Living Room:</h1>
              <p className="text-sm text-[#727272] mt-2">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="mt-10">
              <h1 className=" font-bold text-sm">Dining Room:</h1>
              <p className="text-sm text-[#727272] mt-2">
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
                reduce stress and provide you with better sleep. Fill every room
                of your home with houseplants and their restorative qualities
                will improve your life.
              </p>
            </div>
            <div className="mt-10">
              <h1 className=" font-bold text-sm">Office:</h1>
              <p className="text-sm text-[#727272] mt-2">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      )}
      {shopCart && select.length > 0 && (
        <div className="flex  justify-between">
          <div className="flex flex-col md:w-[60%] w-full">
            <div className="md:flex hidden mt-3 border-b pb-2 border-green-600">
              <h1 className=" text-base font-medium leading-4">Products</h1>
              <h1 className=" text-base font-medium leading-4 ml-[250px]">
                Price
              </h1>
              <h1 className=" text-base font-medium leading-4 ml-16">
                Quantiy
              </h1>
              <h1 className=" text-base font-medium leading-4 ml-16">Total</h1>
            </div>
            <div>
              {select.map((item) => {
                return (
                  <div key={item.id} className="md:mt-6 flex md:flex-col gap-5">
                    <div
                      onClick={() => {
                        resCart ? setResCart(false) : setResCart(true);
                      }}
                      className={`${
                        resCart ? " right-20 md:right-0" : ""
                      } absolute z-10 md:relative w-[93%] md:w-full flex items-center justify-between md:bg-[#FBFBFB] bg-white border shadow-2xl  md:py-2 px-3 rounded-lg`}
                    >
                      <img src={item.image} alt="image" width={"70px"} />
                      <div className="md:flex items-center justify-between">
                        <div>
                          <h1>{item.name}</h1>
                          <p className="text-sm leading-4 md:flex hidden text-[#A5A5A5]">
                            SKU:{" "}
                            <span className="text-[#727272]">
                              1995751877966
                            </span>
                          </p>
                        </div>
                        <h1 className=" font-medium text-base text-green-600 md:ml-10">
                          ${item.price}.00
                        </h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-green-600 text-white font-bold text-2xl rounded-full px-3 pb-2 hover:bg-green-300">
                          -
                        </button>
                        <h1 className="text-[17px]">1</h1>
                        <button className="bg-green-600 text-white font-semibold text-2xl rounded-full px-2 pb-2 hover:bg-green-300">
                          +
                        </button>
                      </div>
                      <h1 className="font-bold md:block hidden text-base text-green-600">
                        ${item.price}.00
                      </h1>
                      <button
                        onClick={() => {
                          dispatch(removeItem(item.id));
                          setCount(count - 1);
                        }}
                        className="hover:text-green-600 md:block hidden"
                      >
                        <DeleteOutlineOutlinedIcon />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        dispatch(removeItem(item.id));
                        setCount(count - 1);
                      }}
                      className="text-green-600 md:hidden absolute top-36 right-10"
                    >
                      <DeleteOutlineOutlinedIcon />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[35%] md:block hidden">
            <div className="border-b border-green-600 pb-2">
              <h1 className="font-bold text-lg">Cart tools</h1>
            </div>
            <h1 className="text-sm text-[#3D3D3D] mt-6 mb-1">Cupon apply</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              id="cuponApply"
              className="flex border justify-between border-green-600 pl-2 rounded-lg mt-1 mb-5"
            >
              <input
                name="cuponApply"
                type="text"
                placeholder="Enter coupon code here..."
                className=" outline-none w-full"
              />
              <button
                type="submit"
                className="bg-green-600 border border-green-600 text-white py-2 px-5"
              >
                Apply
              </button>
            </form>
            <div className=" space-y-1 mb-1">
              <div className="flex items-center justify-between">
                <h1 className="text-[15px] text-[#3D3D3D]">Subtotal</h1>
                <h1 className=" font-medium text-lg text-[#3D3D3D]">
                  $2,683.00
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[15px] text-[#3D3D3D]">Cupon Discount</h1>
                <h1 className="text-[15px] text-[#3D3D3D]">(-) 00.00</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[15px] text-[#3D3D3D]">Shiping</h1>
                <h1 className=" font-medium text-lg text-[#3D3D3D]">$16.00</h1>
              </div>
            </div>
            <h1 className="flex justify-end cursor-pointer text-green-600 text-xs">
              View shipping charge
            </h1>
            <div className="flex items-center justify-between mt-5 mb-5">
              <h1 className="font-bold text-base">Total</h1>
              <h1 className="font-bold text-lg text-green-600">$2,699.00</h1>
            </div>
            <div>
              <button className="font-bold text-[15px] text-white bg-green-600 w-full rounded-lg py-3 flex justify-center items-center hover:bg-green-500">
                Proceed To Checkout
              </button>
              <button
                onClick={() => setShopCart(false)}
                className="text-[15px] text-green-600 w-full rounded-lg py-3 flex justify-center items-center hover:text-green-500"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="md:mt-20 mt-10">
        <div className=" border-b">
          <h1 className="font-bold text-[17px] text-green-600">
            {!shopCart ? "Releted Products" : "You may be interested in"}
          </h1>
        </div>
        <div className="flex gap-7 md:gap-8 md:justify-between mt-10">
          <div className="gap-4 md:gap-8 flex md:flex-row flex-col">
            <div>
              <div className="bg-gray-400 p-3 rounded md:w-[200px] w-[180px] h-[170px] md:h-auto">
                <img src={Json[0].image} alt="" />
              </div>
              <h1 className="text-[#3D3D3D] text-[15px]">{Json[0].name}</h1>
              <h1 className="text-green-600 font-bold text-base">
                ${Json[0].price}.00
              </h1>
            </div>
            <div>
              <div className="bg-gray-400 p-3 rounded flex md:w-[200px] w-[180px] h-[170px] md:h-[186px]">
                <img src={Json[1].image} alt="" />
              </div>
              <h1 className="text-[#3D3D3D] text-[15px]">{Json[1].name}</h1>
              <h1 className="text-green-600 font-bold text-base">
                ${Json[1].price}.00
              </h1>
            </div>
            <div>
              <div className="bg-gray-400 p-3 rounded md:w-[200px] w-[180px] h-[175px] md:h-[186px] md:flex">
                <img src={Json[4].image} alt="" />
              </div>
              <h1 className="text-[#3D3D3D] text-[15px]">{Json[4].name}</h1>
              <h1 className="text-green-600 font-bold text-base">
                ${Json[4].price}.00
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-8 gap-4 md:justify-normal justify-around">
            <div>
              <div className="bg-gray-400 p-3 rounded md:w-[200px] w-[180px] h-[170px] flex md:h-[185px]">
                <img src={Json[7].image} alt="" />
              </div>
              <h1 className="text-[#3D3D3D] text-[15px]">{Json[7].name}</h1>
              <h1 className="text-green-600 font-bold text-base">
                ${Json[7].price}.00
              </h1>
            </div>
            <div>
              <div className="bg-gray-400 p-3 rounded md:w-[200px] w-[180px] h-[175px] md:h-[185px]">
                <img src={Json[6].image} alt="" />
              </div>
              <h1 className="text-[#3D3D3D] text-[15px]">{Json[0].name}</h1>
              <h1 className="text-green-600 font-bold text-base">
                ${Json[0].price}.00
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
