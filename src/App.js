import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
//import { robots } from './Robots';
import './App.css';


// const state = {
//   robots: robots,
//   searchfield: ''
// }

//any component that has state uses class syntax and to use constructor
class App extends Component{
  //construting the states
  constructor(){
    super()
    // two states robots and searchfield
    this.state = {
      robots: [],
      searchfield: '' // whatever we type in the searchbox
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users })});
  }

  //onsearch
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    //console.log(filteredRobots);
  }
  //rendering the whole states
  render(){
    //new array filteredrobots is created
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>loading</h1>
    } else{
      return (
        //whole structure of page
        <div className='tc'>
          <h1 className='f1'>ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
