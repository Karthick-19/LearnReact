import React from "react";
import LineItem from "./LineItem";


const ItemList = ({item,handleChange,handleDelete}) => {
    return (
        <ul>
        {item.map((item) => (
            <LineItem
            item = {item}
            key = {item.id}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
            />
        ))}
        </ul>
    )
}

export default ItemList;