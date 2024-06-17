import './App.css';
import React, {UseState} from 'react';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import {Routes, Route} from "react-router-dom";
import Favorites from './pages/Favorites';
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';


class App extends React.Component
{
  render(){
    return(
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/catalogue" element={<Catalogue />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/product/:id" element={<ProductInfo />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    )
  }
}

export default App;
