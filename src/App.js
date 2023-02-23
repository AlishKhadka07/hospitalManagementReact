import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header'

import API from './components/API';

// pages 
import Home from './pages/Home'
import Contact from './pages/Contact'
import { About } from './pages/About';
import LoginPage from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/API" element={<API/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
