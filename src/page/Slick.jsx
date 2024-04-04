import { Json } from "./Json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {Json.slice(0,3).map((item, index) => (
        <div key={item.id}>
          <div className="flex md:bg-white bg-green-200 slide p-5 md:px-10 md:h-[450px] md:rounded-none justify-between rounded-xl">
            <div className="w-[50%] flex flex-col px-3 justify-center  ">
              <h1 className="mb-2 md:text-sm text-[11px] leading-4 font-medium cursor-default">
                Welcome to GreenShop
              </h1>
              <h1 className="text-[#3D3D3D] font-black cursor-default md:text-6xl text-[19px] leading-7">
                LET’S MAKE A BETTER{" "}
                <span className=" text-green-600">PLANET</span>
              </h1>
              <p className="hidden md:block  cursor-default text-sm text-[#727272] mb-11 mt-1">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <p className="md:hidden text-xs leading-5">
                We are an online plant shop offering a wide range
              </p>
              <button className="bg-green-600 hidden md:block text-white w-[25%] py-2 rounded-lg hover:bg-green-500">
                SHOP NOW
              </button>
              <button className="text-green-500 w-[60%] mt-4 md:hidden">
                SHOP NOW
              </button>
            </div>
            <div className="flex items-center">
              <img
                src={item.image}
                alt="img"
                className="w-[150px] md:w-[350px]"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Slick;
