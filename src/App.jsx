import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoCard from './components/Todocard';
import ReactDom from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Todo from './pages/Todo';
import Recipes from "./pages/Recipes";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
