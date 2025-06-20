import React from "react";
import { Button, Carousel } from "antd";
import { useNavigate } from "react-router-dom";
const Slider = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex justify-end p-4 bg-red-100">

    <Button type="primary" onClick={()=>navigate('/')}>Home</Button>
    </div>
<div className="h-[300px] w-full p-10"> 
    <Carousel autoplay dotPosition="top" effect="fade" arrows  autoplaySpeed={1000} dots={false}>
      <div>
        <h1 className="text-white text-center leading-[160px] bg-red-500">Slide 1</h1>
      </div>
      <div>
        <h1 className="text-white text-center leading-[160px] bg-emerald-500">Slide 2</h1>
      </div>
      <div>
        <h1 className="text-white text-center leading-[160px] bg-blue-400">Slide 3</h1>
      </div>
      <div>
        <h1 className="text-white text-center leading-[160px] bg-black">Slide 4</h1>
      </div>
    </Carousel>
</div>
    </>
  );
};

export default Slider;
