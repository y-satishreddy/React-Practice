import React, { useState } from "react";

const Alert = () => {
  let [name, setName] = useState("");
  function actionSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      alert("❌ Please enter your name.");
    } else {
      alert(`Hello,${name}`);
      setName("");
    }
  }
  function onChangeValue(e) {
    setName(e.target.value);
  }
  return (
    <div className="h-screen w-100% bg-[#0A3A5E] flex items-center justify-center">
      <form
        onSubmit={actionSubmit}
        className="h-[auto] w-[30%] bg-white flex items-center justify-center flex-col"
      >
        <input
          type="text"
          className="border-2 p-1 w-[80%] m-2"
          value={name}
          onChange={onChangeValue}
        />
        <button className="border-2 p-1 w-[40%] m-2">Submit</button>
      </form>
    </div>
  );
};

export default Alert;
