import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
    const {robots, searchfield} = this.state;
    //new array filteredrobots is created
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //ternary operator
    return !robots.length ? <h1>loading</h1>  :
     (
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

export default App;
