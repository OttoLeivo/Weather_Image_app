import React from 'react';
import './App.css';
import Weather from "./components/weather.component"

function App() {
  console.log(process.env)
  return (
    
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
