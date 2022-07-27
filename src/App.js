import './index.css';
import Home from './components/Home';
import NewGrocery from './components/NewGrocery';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import Saved from './components/Saved';
import { useState, useEffect } from 'react';

function App() {
  const[groceries,setGroceries] =useState([])
  useEffect(() => {
    fetch('http://localhost:4000/groceries')
      .then((resp) => resp.json())
      .then((data) => setGroceries(data));
  },[]);
  const saved = groceries.filter((item)=> item.isSaved===true)

  function onAddNew(data){
    setGroceries([...groceries,data])
  }
  function onUpdate(data){
    console.log(data)
    const upd = groceries.map((item)=>{
      if(item.id===data.id){
        return data
      }
      return item
    })
    setGroceries(upd)
  }
  return <div >
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home groceries={groceries} onUpdate={onUpdate}/>} />
        <Route exact path="/saved-grocery" element={<Saved onUpdate={onUpdate} groceries={saved}/>} />
        <Route exact path="/new" element={<NewGrocery onAddNew={onAddNew}/>} />
      </Routes>
  
    </div>
  
}

export default App;
