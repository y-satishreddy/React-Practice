import React from "react";

const FixedAlignment = () => {
  return (
    <div className="h-10 w-[100%] bg-amber-200">
      <ul className="flex h-[100%] w-[30%] bg-amber-600 gap-[5%] 1">
        <li className="flex items-center justify-center h-[100%] w-[20%] bg-amber-50 text-[10px] text-center hover:font-bold">
          Home
        </li>
        <li className="flex items-center justify-center h-[100%] w-[20%] bg-amber-50 text-[10px] text-center hover:bg-red-950 hover:text-white hover:font-bold">
          Contact us
        </li>
        <li className="flex items-center justify-center h-[100%] w-[20%] bg-amber-50 text-[10px] text-center hover:bg-red-950 hover:text-white hover:font-bold">
          Services
        </li>
        <li className="flex items-center justify-center h-[100%] w-[20%] bg-amber-50 text-[10px] text-center hover:bg-red-950 hover:text-white hover:font-bold">
          Events
        </li>
      </ul>
    </div>
  );
};

export default FixedAlignment;
