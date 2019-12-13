import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:robots,
            searchfield:''
        }
    }
    
    onSearchChange = (event) => {
        //React provides a method called setState() to change the state
        this.setState({searchfield:event.target.value})
       
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        //console.log(filterRobots);
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                < SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots}/>
            </div>
        );
    } 
}

export default App;