import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield:''
        }
    }
    
    //add Lifecycle method componentDidMount() to get dynamically users
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));  
    }

    onSearchChange = (event) => {
        //React provides a method called setState() to change the state
        this.setState({searchfield:event.target.value})
       
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    < SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filterRobots}/>
                </div>
            );
        }
    } 
}

export default App;