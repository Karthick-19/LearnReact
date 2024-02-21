import React from "react";
import { useState } from "react";


    // function handleColorChange(){
    // const colors = ["Red","Blue"];
    // const int = Math.floor(Math.random()*2);
    // return colors[int]
    // }
    // function colorCondition(res){
    //     if (res === "Red"){
    //         return "Eren Yaegar";
    //     }
    //     else{
    //         return "Light Yagami";
    //     }
    // }
const Content = ()=>{
    
    
    // const x_res = handleColorChange();
    // const chosenCharacter = colorCondition(x_res);
    // const handleClick = (name) =>{
    //     console.log(`${name} Try or Die`)
    // }
    // const handleClick2 = (e) => {
    //     console.log(e.target.innerText)
    // }
    // const [count,setCount] = useState(69);
    // function increaseNumber(){
    //     setCount(prevcount => prevcount + 1)
    //     }
    // function decreaseNumber(){
    //     setCount(prevcount => prevcount -1)
    // }
    // function justClick(){
    //     setCount(prevcount => prevcount);
    // }
    // function names(){
    //     return console.log("Karthick")
    // }
    // const [name,setName] = useState(()=>names());
    const [colour,setColour] = useState("Red");
    function colorChange(){
        const colors = ["Red","Blue","Green"];
        const int = Math.floor(Math.random()*3);
        const ans = colors[int]
        setColour(ans);
    }
    const chosenCharacter = "Eren Yaegar";
    return (
        <main>
           <p>Choose your pill:{colour}</p>
           <p>You have Chosen..</p>
           <button onClick = {colorChange}>Click here</button>
           {/* <button onClick={decreaseNumber}>-</button>
           <span>{count}</span>
           <button onClick={increaseNumber}>+</button> */}
           </main>
        );
}

export default Content