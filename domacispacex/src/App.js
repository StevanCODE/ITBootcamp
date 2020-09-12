import React, {useState,useEffect} from 'react';
import './App.css';
import { getPastLaunches, getInfo, getPastLaunchesByYear } from './services';
import {Header} from "./components/Header"
import {Div} from "./components/Div"
import {Select} from "./components/Select"


document.body.classList.add("body")



function App() {
  
  const [year,setYear] = useState("")
  const [launches,setLaunches] = useState([])
  const [launchYear,setLaunchYear] = useState([])
  const [info,setInfo] = useState([])

  useEffect(() =>{
    getPastLaunches().then(res => {
      setLaunches(res.data)
    })
  },[])

  useEffect(() =>{
    getInfo().then(res => {
      setInfo(res.data)
    })
  },[])


  useEffect(() =>{
    getPastLaunchesByYear(year).then(res => {
      setLaunchYear(res.data)
    })
  },[year])


// console.log(launches)
// console.log(info)
console.log(launchYear)


  return (
    <div className = "div">
    <Header info = {info}/>
    <Select setYear = {setYear}/>
    <Div launches = {launches} year = {year} launchYear = {launchYear}/>
    
    </div>
  )
}

export default App;
