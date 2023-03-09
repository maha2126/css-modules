import { useState, useEffect } from 'react';
import './App.css';
import Grid from './Grid/Grid'
import Table from './Table/Table'

const App = () => {

  const[users,setUsers] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api?results=9&inc=name,picture")
    .then(r => r.json())
    .then(r => setUsers(r.results))
  }, [])

  return <div>
    <Grid users={users}/>
    <Table users={users}/>
  </div>
}

export default App;
