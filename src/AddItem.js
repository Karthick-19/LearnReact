import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({newItem,SetnewItem,handleSubmit}) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="addItem">Add Item</label>
            <input 
            id="addItem"
            type="text"
            autoFocus
            ref = {inputRef}
            placeholder="Add Item"
            value={newItem}
            onChange={(e) => SetnewItem(e.target.value)}
            required
            ></input>
            <button type="submit" aria-label="Add Item" onClick={()=> inputRef.current.focus()}>
                <FaPlus/>
            </button>
        </form>
    )
}

export default AddItem;