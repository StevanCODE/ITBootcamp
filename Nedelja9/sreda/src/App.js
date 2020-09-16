import React , {useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './App.css';
import {getUsers} from "./services"

const showUsers = (users) => {
  return(
    users.map(el => {
      return(
        <div key = {Math.random()}>
        <p > {el.first_name} {el.last_name} </p>
        </div>
      )
    })
  )
}


const showSearchUsers = (users) => {
  return(
    users.map(el => {
      return(
        <div key = {Math.random()}>
        <p > {el.first_name} {el.last_name} </p>
        <button onClick = {() => {
              users.splice(users.indexOf(el),1)
          }}> X </button>
        </div>
      )
    })
  )
}




const filterUsers = (search,users) => {
  return (
    users.map(el => {
      if(el.first_name.includes(search)){
        return(
          <div key = {Math.random()}>
          <p > {el.first_name} {el.last_name} </p>
          <button onClick = {() => {
              users.splice(users.indexOf(el),1)
          }}> X </button>
          </div>
        )
      }
    })
  )
}

const Home = ({users}) => {
  return (
    <div key = {Math.random()}>
  {showUsers(users)}
    </div>
  )
}

const Search = ({users}) => {
  const [search,setSearch] = useState("")
  console.log(search)
  return(
    <div>
    <input id = "search" onChange = {(e) => setSearch(e.target.value)}></input>
    {search === "" ? showSearchUsers(users) : filterUsers(search,users)}
    </div>
  )
   
}


function App() {

  const [users,setUsers] = useState([])

  useEffect(() => {
    getUsers().then(res=> {
      setUsers(res.data.data)
    })
  },[])



  return (
    <Router>
      <nav id = "nav">
        <Link   id = "home" to = "/home"> Home </Link>
        <Link   className = "search" to = "/search"> Search </Link>
      </nav>
      <Switch>
      <Route path = "/home">
        <Home users = {users}/>
      </Route>
      <Route path = "/search">
      <Search className = "search" users = {users} setUsers ={setUsers}/>

      </Route>
      </Switch>
    </Router>
  );
}

export default App;
