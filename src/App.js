import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData]=useState([])
  useEffect(() =>{
    fetch("http://localhost:3000/bots")
    .then(res => res.json())
    .then(dta => console.log(dta))
  })
}

export default App;
