import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/users');
        setData(response.data);
        console.log(response.data); // Logs the response from the backend
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Data</h1>
        <ul>
          {data.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
