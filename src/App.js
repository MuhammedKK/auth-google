import React from 'react'
import './App.css';
import {signInWithGoogle} from './firebase'


const App = () => {
  return (
    <div className="App">
      Google Authentication
      {localStorage.getItem("name")}
      {localStorage.getItem("email")}
      <img src={localStorage.getItem("image")} alt="user"/>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default App;
