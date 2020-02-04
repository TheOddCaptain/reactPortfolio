import React from 'react';
import './App.css';
import Navigator from './Navigator/Navigator'
import Home from './Home/home'
import About from './About/about'
import Contact from './Contact/contact'
import Footer from './Footer/footer'
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
