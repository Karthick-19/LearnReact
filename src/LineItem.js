import React from "react";
import {FaTrash} from "react-icons/fa"

const LineItem = ({item,handleChange,handleDelete}) => {
    return(
        <li className="item" key = {item.id}>
                <input 
                type="checkbox"
                onChange={()=>handleChange(item.id)}
                checked = {item.checked}
                />
                <label style={(item.checked) ? {textDecoration:'line-through'}:null}
                onDoubleClick={()=>handleChange(item.id)}>
                    {item.item}</label>
                <FaTrash 
                onClick={()=>handleDelete(item.id)}
                role="button"
                tabIndex="0"/>
            </li>
    )
}

export default LineItem;