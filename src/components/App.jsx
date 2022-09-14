import React, { useState } from "react";
import ToDo from "./ToDo";
function App() {

  const [addText, setAddText]=useState("");
  const [items,setItems]=useState([]);

  function handleChange(event){
    const newValue=event.target.value;
    setAddText(newValue);
  }
  function addItem(){
setItems(prevValue=>{
  return [...prevValue,addText]
});
setAddText("");
  }

function deleteItem(id){
  setItems(prevItems=>{
    return prevItems.filter((item,index)=>{
return index!==id;
    });
  });
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
        
      </div>
      <div className="form">
        <input type="text" value={addText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          
          {items.map((todoItem,index)=>
          (<ToDo key={index} id={index} text={todoItem} onChecked={deleteItem} />
          
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
