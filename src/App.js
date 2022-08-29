import React from 'react';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';

function App() {
  return (
    <div className="App">
      <StopWatch />
      <div>
      <img src={process.env.PUBLIC_URL+"pic.png"} />
      </div>
      <iframe
        id="embed"
        src="https://react-exdcin.stackblitz.io?embed=1&file=src/style.css?embed=1&file=index.js, src/App.js"
        className="App"
      ></iframe>
    </div>
  );
}

export default App;
