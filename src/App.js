import React, { Component } from 'react'
import Table from './Table.js'

class App extends Component {
    render() {
        const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]
      return (
       <div className="container">
         <div><h1>REACT app in development</h1></div>
         <Table characterData={characters} />
       </div>
      )
    }
  }

  export default App