import './index.css';
import Home from './components/Home';
import NewGrocery from './components/NewGrocery';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import Saved from './components/Saved';
import { useState, useEffect } from 'react';
import EditForm from './components/EditForm';

function App() {
  const[groceries,setGroceries] =useState([])
  useEffect(() => {
    fetch('https://fair-jade-elk-slip.cyclic.app/groceries')
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
  function onDelete(id){
    const deled = groceries.filter(item => item.id !== id)
    setGroceries(deled)
  }
  return <div >
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home groceries={groceries} onUpdate={onUpdate} onDelete={onDelete}/>} />
        <Route exact path="/saved-grocery" element={<Saved onUpdate={onUpdate} groceries={saved} onDelete={onDelete}/>} />
        <Route exact path="/new" element={<NewGrocery onAddNew={onAddNew}/>} />
        <Route exact path="/edit" element={<EditForm onUpdate={onUpdate} />} />


      </Routes>
  
    </div>
  
}

export default App;
