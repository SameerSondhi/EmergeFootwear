import "bootstrap/dist/css/bootstrap.min.css";
import './assets/bootstrap.custom.css'
import './index.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
import Header from "./components/Header";
import CartScreen from "./pages/CartScreen";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        <Route path='/cart' element={<CartScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
