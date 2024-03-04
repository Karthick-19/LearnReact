import Header from './Header';
// import Content from './Content';
import TodoContent from './TodoContent';
import Footer from './Footer';
import { useState } from "react";
import AddItem from './AddItem';
import { useEffect } from 'react';


function App() {
  const [items,setItems] = useState([]);

  useEffect(()=>{
    JSON.parse(localStorage.getItem('todo_list'))
  },[])

  const handleChange = (id) => {
    const listItems = items.map((item) => 
        item.id === id ? {...item,checked:!item.checked} : item
    )
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const delItems = items.filter((item) => item.id !== id)
    setItems(delItems)
    localStorage.setItem("todo_list",JSON.stringify(delItems))
    // console.log('Delete Works')
}

const [newItem,SetnewItem] = useState('')

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addnewItem = {id,checked:false,item};
  const listItems = [...items,addnewItem];
  setItems(listItems);
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleSubmit = (e) => {
  e.preventDefault()
  // console.log(newItem)
  if (!newItem) return;
  addItem(newItem)
  SetnewItem('')
  
}
  return (
    <div className='App'>
      <Header/>
      <AddItem
      newItem = {newItem}
      SetnewItem = {SetnewItem}
      handleSubmit = {handleSubmit}
      />
      <TodoContent 
      item = {items}
      handleChange = {handleChange}
      handleDelete = {handleDelete}
      />
      <Footer
      length = {items.length}
      />
    </div> 
    
  );
}

export default App;
