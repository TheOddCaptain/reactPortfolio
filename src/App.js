import React from 'react';
import './App.css';
import Navigator from './Navigator/Navigator'
import Home from './Home/Home'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navigator/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
