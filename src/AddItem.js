import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem,SetnewItem,handleSubmit}) => {
    return (
        <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="addItem">Add Item</label>
            <input 
            id="addItem"
            type="text"
            autoFocus
            placeholder="Add Item"
            value={newItem}
            onChange={(e) => SetnewItem(e.target.value)}
            required
            ></input>
            <button type="submit" aria-label="Add Item">
                <FaPlus/>
            </button>
        </form>
    )
}

export default AddItem;