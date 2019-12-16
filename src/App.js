import React from 'react';
import './App.css';
import Navigator from './Navigator/Navigator'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
