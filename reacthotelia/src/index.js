import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Inicio from './pages/inicio/Inicio.js'
import Login from './pages/login/Login.js';
import Registrar from './pages/Registrar/Registrar.js';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/' element={<Registrar/>}/>
 
    <Route path='*' element={<Error404/>}/>
    </Routes>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

