import './styles/App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Additems from './pages/Additems';
import AllItems from './pages/AllItems';
import Checkitems from './pages/Checkitems';
import ItemsProvider from './Hooks/FetchItemsContext';
import { Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <ItemsProvider>
    <div className="App">
    <Navbar/>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="allitems" element={ <AllItems/> } />
        <Route path="additem" element={ <Additems/> } />
        <Route path="checkeditems" element={ <Checkitems/> } />
      </Routes>
    </div>
    </ItemsProvider>
  );
}

export default App;
