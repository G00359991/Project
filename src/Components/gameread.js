import React from 'react'; // pulls in code from react to be used in gameread.js and allow for the html to be outputted into the react app
import '../App.css';
import { Games } from './games'; // pulls in code from the games.js component to be used in gameread.js, which will then be brought in and used for App.js
import axios from 'axios'; // pulls in code from axios to be used in gameread.js to allow for json to be outputted correctly into the react app

export class Gameread extends React.Component { // extends from and uses the code from react

    constructor(){
        super() // invokes the parent's constructor

        this.ReloadGameData = this.ReloadGameData.bind(this); // binds the ReloadGameData's method to the instance
    }

    state = {
        games: []
    };

    componentDidMount() { /* fetches the necessary jsonblob information to be outputted in gameread.js in order to acquire the necessary data for the games to be outputted to the screen at the localhost port specified below in the url. An error message to pop up in case something goes wrong. */
        axios.get('http://localhost:4000/api/games')
            .then(
                (response) => {
                    this.setState({ games: response.data })
                }
            )
            .catch((error) => {
                console.log(error)
            });
    }

    ReloadGameData() { /*method used to reload jsonblob data in the database that is to be outputted in gameread.js as well as to acquire the now reloaded necessary data for the games to be outputted to the screen at the localhost port specified in the url below. An error message to pop up in case something goes wrong */
        axios.get('http://localhost:4000/api/games')
            .then(
                (response) => {
                    this.setState({ games: response.data })
                }
            )
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return ( /*outputs the heading text for the gameread.js to the screen, and also runs code that allows for the code from games.js to run properly and output to the screen.*/ 
            <div className="App">
                <h1>These are the games</h1>
                <Games games={this.state.games} ReloadGameData={this.ReloadGameData}></Games>
            </div>
        );
    }
}