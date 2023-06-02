// import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from "./compoents/NavBar/NavBar";
import Banner from './compoents/Banner/Banner';
import RowPost from './compoents/RowPost/RowPost';
import {action, originals, Animation, Adventure,Comedy, Crime, Fantasy, History, Horror, Romance, Mystery} from './urls'

function App() {
  return (
   <div>
      <NavBar />
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='action' isSmall/>
      <RowPost url={Animation} title='Animation' isSmall/>
      <RowPost url={Adventure} title='Adventure' isSmall/>
      <RowPost url={Comedy} title='Comedy' isSmall/>
      <RowPost url={Crime } title='Crime' isSmall/>
      <RowPost url={Fantasy} title='Fantasy' isSmall/>
      <RowPost url={History} title='History' isSmall/>
      <RowPost url={Horror} title='Horror' isSmall/>
      <RowPost url={Romance} title='Romance' isSmall/>
      <RowPost url={Mystery} title='Mystery' isSmall/>

   </div>
  );
}

export default App;
