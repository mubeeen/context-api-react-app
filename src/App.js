import './App.css';
import { React, useState } from 'react';
import { Header } from './components/Header';
import {Home} from './components/Home';
import {Cart} from "./components/Cart";
import { 
  BrowserRouter as Router, 
  Routes,
  Link,
  Route 
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
