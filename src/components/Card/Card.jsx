import React from "react";
import Trainer from "../../assets/trainer.jpg";
import "./card.css";
const card = () => {
  return (
    <div className="h-[auto] w-[25%] p-[1%] box-border shadow flex flex-col justify-between gap-2">
      <img src={Trainer} alt="" className="h-[200px] w-[100%]" />
      <h3 className="text-xl font-semibold">Singe</h3>
      <p className="text-[16px] font-extralight">MA Trampsd</p>
      <p className="text-[14px] font-light text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <a href="" className="text-[16px] font-light text-blue-950">
        LinkedIn Profile
      </a>
    </div>
  );
};

export default card;
