import React from "react";

const Footer = (props)=>{
    const year = new Date();
    return (
        <footer>  
            {props.length} {props.length === 1 ? "Item" : "Items"}
        </footer> 
    );
}

export default Footer