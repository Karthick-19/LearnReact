import Header from './Header';
// import Content from './Content';
import TodoContent from './TodoContent';
import Footer from './Footer';
import { useState } from "react";
import AddItem from './AddItem';


function App() {
  const [item,setItems] = useState(
    [{id:1,checked:true,item:"React Coding"},{id:2,checked:false,item:"Angular Coding"},{id:3,checked:true,item:"Spring Coding"}]);
const handleChange = (id) => {
    const listItems = item.map((item) => 
        item.id === id ? {...item,checked:!item.checked} : item
    )
    setItems(listItems)
}
const handleDelete = (id) => {
    const delItems = item.filter((item) => item.id !== id)
    setItems(delItems)
    // console.log('Delete Works')
}
  return (
    <div className='App'>
      <Header/>
      <AddItem/>
      <TodoContent 
      item = {item}
      handleChange = {handleChange}
      handleDelete = {handleDelete}
      />
      <Footer
      length = {item.length}
      />
    </div> 
    
  );
}

export default App;
