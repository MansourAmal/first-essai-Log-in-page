
import './App.css';
import React from 'react';
import Login from './Login';
import image from "./image/ImageW.jpg"


function App() {
  const styleForm={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  }
  return (
    <div className="App"> 
      <div
       className='image_box'>
        <img src={image} className='img' alt='lll'/>
      </div>
        <Login styleForm={styleForm} />
    </div>
  );
}

export default App;
