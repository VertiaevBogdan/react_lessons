//import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout.jsx";
import Main from "./components/Main.jsx";
import ToDoList from "./components/ToDoList.jsx";

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}></Route>
                <Route path="todolist" element={<ToDoList/>}></Route>
                <Route path="lesson3" element={<ToDoList/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}


