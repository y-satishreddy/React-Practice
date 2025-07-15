import React from "react";
import Trainer from "../../assets/trainer.jpg";
import "./card.css";
const card = () => {
  return (
    <div className="h-[350px] w-[25%] bg-red-300 p-[1%] box-border">
      <img src={Trainer} alt="" className="h-[200px] w-[100%]" />
      <h3 className="text-xl font-semibold">Singe</h3>
      <p className="text-[16px] font-extralight">MA Trampsd</p>
      <p className="text-[16px] from-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <a href="">LinkedIn Profile</a>
    </div>
  );
};

export default card;
