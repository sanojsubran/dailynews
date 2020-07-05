import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stories: []
    }
  }
  

  componentDidMount() {
    fetch("https://api.techdigest.today/")
    .then(res => res.json())
    .then(
      (data) => {
      this.setState({ 
        isLoaded:true,
        stories: data,
    });
  },
  (error) => {
    this.setState({
      isLoaded: true,
      error
    });
  })
}
  
  render() {
    const { error, isLoaded, items } = this.state;
    this.story = this.state.stories.map((item,key) =>
    <li><a href={item.url} target="_blank" title={item.title}>{item.title}</a></li>
    );
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <h2>Hacker News</h2>
          <ul>{this.story}</ul>
        </div>
       )
    }
  }
}

  export default App
