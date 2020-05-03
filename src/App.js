import React, { Component } from 'react'
import Table from './Table.js'
import axios from 'axios'
import logo from './logo.jpg';

class App extends Component {
  state = {
    persons: []
  }
  
  render() {
    return (
       <div className="container">
         <p>
          <img src={logo} alt="Site Under construction" title="Site Under construction" width="800" height="600" border="0"/>
         </p>
         <p>
          <a href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by upklyak - www.freepik.com</a>
         </p>
       </div>
      )
    }
  }

  export default App
