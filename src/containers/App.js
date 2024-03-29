import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import {setSearchField } from '../actions';

//what peace of state I need to listen
const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

//return an object that contain all of our actions
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:[]
        }
    }
    
    //add Lifecycle method componentDidMount() to get dynamically users
    componentDidMount(){
        //console.log(this.props.store.getState());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));  
    }

    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length?
            <h1>Loading</h1> :
            (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                < SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(App);