import './App.css';
import Home from './components/Home';
import GroceryItem from './components/GroceryItem';
import NewGrocery from './components/NewGrocery';

function App() {
  return (
    <div className="App">
      <Home />
      <GroceryItem />
      <NewGrocery />
    </div>
  );
}

export default App;
