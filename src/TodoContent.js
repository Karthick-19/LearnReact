import React from "react";
import ItemList from "./ItemList";

const TodoContent = ({item,handleChange,handleDelete})=>{
   
    return(
        <main>
            {(item.length) ? (
            <ItemList
            item = {item}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
            />
            ) : <p>Your list is empty..!!</p>
                }
        </main>

    );
}

export default TodoContent;