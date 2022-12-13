import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 
class navbar extends Component {
    render() {
        return (


<header id="navigation" class="navigation sticky">
  <div class="container">
    <div class="navbar-header w-100">
      <nav class="navbar navbar-expand-lg navbar-dark px-0">
        <a class="navbar-brand logo" href="./">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Seal_of_the_City_of_Cincinnati_%28Ohio%29.png/1200px-Seal_of_the_City_of_Cincinnati_%28Ohio%29.png"  id="logoSize"  alt="Seal of Cincinnati" height={100}/>
          </a>
          
          
        
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar01" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbar01">
          <ul class="navbar-nav navigation-menu ml-auto">
            <li class="nav-item" >
              <a style={{color: '#262629'}} class="nav-link" to="/">Home</a>
            </li>

            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/CultureHistory">Culture & History</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Attractions">Attractions</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Sports">Sport Venues</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-linLink" to="/teamPage">Team</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  </header>

            );
    }
}
export default navbar;