import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
// import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            robots: [],
            searchText: ''
        }
    }

    //life cycle methods
    componentDidMount() {
        let x = fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        console.log(x);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevState);
    }

    onSearchChange = (event) => {
        this.setState({ searchText: event.target.value });

    }

    render() {
        const { robots, searchText } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
        }
        );
        return !robots.length ? (<h1 className='f1 increase'>Robo Friends LOADING...</h1>) :
            (
                <ErrorBoundary>
                    <div className="tc">
                        <h1 className='f1 increase'>Robo-Friends</h1>
                        <SearchBox onSearchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </div>
                </ErrorBoundary>
            );

    }
}

export default App;