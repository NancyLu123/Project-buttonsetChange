import React ,{useState}from 'react';
import List from "./components/list"
import './App.css';
import Addcount from './components/Addcount';
import styled from 'styled-components'
//輸出interface Istate
export interface Istate{
  count:{
    id:number
    inpute:number
  }[]
}
function App() {

  const [count,setcount]=useState<Istate["count"]>([])


  return (
    <div className="App">
      <Addcount count={count} setcount={setcount} />

      <br />
      <br />
      <List count={count}/>
    </div> 
  );
} 

export default App;
