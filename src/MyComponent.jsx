import React, { useState } from 'react';
function MyComponent(props){
    console.log(props.name+" - Incoming props name");
    let [name, setName] = useState("Nothing 1A");

    function handleClick() {

     console.log(name+" - useSate name value before change");
        setName(props.name);
        console.log(name+" - useSate name value after change");
    }
    return(
    <div className="my-component">
        <h1>Products</h1>
        <h3>{props.name}</h3>
        <h4>{name}</h4>
        <button onClick={handleClick}>Click to change the product name</button>
    </div>

    )
}
export default MyComponent;