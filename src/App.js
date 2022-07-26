import './App.css';
import Home from './components/Home';
import GroceryItem from './components/GroceryItem';
import NewGrocery from './components/NewGrocery';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";

function App() {
  return <div >
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/grocery-item" element={<GroceryItem />} />
        <Route exact path="/new" element={<NewGrocery />} />
      </Routes>
  
    </div>
  
}

export default App;
