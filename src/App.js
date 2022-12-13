import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import about from './components/about';
import callToAction from './components/callToAction';
import Contact from './components/Contact';
import CultureHistory from './components/CultureHistory';
import diverseDynamic from './components/diverseDynamic';
import Sports from './components/Sports'
import header from './components/header';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import portfolio from './components/attractions';
import socialLinksAtBottom from './components/socialLinksAtBottom';
import TeamPage from './components/TeamPage';
import testimonials from './components/testimonials';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Attractions from './components/attractions';
import Base from './components/Footer';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className='App'>
      <Router>
        
        <Navbar/>
        <Route exact path= '/' component={LandingPage} />
        <Route path= '/teamPage' component={TeamPage} />
        <Route path= '/CultureHistory' component={CultureHistory} />
        <Route path= '/Contact' component={Contact} />
        <Route path= '/Attractions' component={Attractions} />
        <Route path='/sports' component = {Sports} />
        
        
        
       </Router>
       
       </div>
     
    )
  }
}

export default App;