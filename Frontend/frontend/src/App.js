import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000")
    .then(response => {
        setData(response.data);
        console.log("response : ", response.data);
      })
    .catch(err => {})
  }, []);

  return (
    <div className="App">
      <header>Data Generated From Django</header>
      <hr/>
      {
        data.map((item, index) => 
        
          <div key={index}>
            <h1>{item.employee}</h1>
            <p>{item.department}</p>
            <p>{item.designation}</p>
          </div>
        )
      }
    </div>
  );
}

export default App;
