// import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from "./compoents/NavBar/NavBar";
import Banner from './compoents/Banner/Banner';
import RowPost from './compoents/RowPost/RowPost';

function App() {
  return (
   <div>
      <NavBar />
      <Banner/>
      <RowPost/>
   </div>
  );
}

export default App;
