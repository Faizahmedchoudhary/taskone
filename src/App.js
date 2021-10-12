import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Blogs from './components/Blogs'
import Location from './components/Location'
import Account from './components/Account'

import React, {  useState } from "react";


function App() {
  const [ShowAccount, setShowAccount] = useState(true)
  return (
    <div className="App">
      <Header /> 
      <Slider  onAdd={() => setShowAccount(!ShowAccount)} showAdd={ShowAccount} />
      <div className="blog-data">
          <Blogs />
          <Location />
      </div>
        {ShowAccount && <Account /> }
    </div>
  );
}

export default App;
