import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const url = 'http://localhost:5000/api/test'; // Direct backend URL
    console.log('Fetching from:', url);
    axios.get(url)
      .then(response => {
        setMessage(response.data.message);
        setError('');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch backend data');
      });
  }, []);

  return (
    <div className="App">
      <h1>STACKIT App</h1>
      <p>Backend Response: {message || error}</p>
    </div>
  );
}

export default App;