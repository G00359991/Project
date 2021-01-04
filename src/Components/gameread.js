import React from 'react'; // pulls in code from react to be used in gameread.js and allow for the html to be outputted into the react app
import '../App.css';
import { Games } from './games'; // pulls in code from the games.js component to be used in gameread.js, which will then be brought in and used for App.js

export class Gameread extends React.Component { // extends from and uses the code from react

    state = {
        games: [ /*code below outputs the title/name, year of release, and image/poster of each game to the screen*/
            {
            "Name": "Tomb Raider 2",
            "Yearofrelease": "1997",
            "Image": "https://upload.wikimedia.org/wikipedia/en/d/d4/Tomb_Raider_II.png"
            },
            {
            "Name": "Crash Bandicoot",
            "Yearofrelease": "1996",
            "Image": "https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png"
            },
            {
            "Name": "God of War",
            "Yearofrelease": "2005",
            "Image": "https://upload.wikimedia.org/wikipedia/en/0/0c/Gowbox.jpg"
            }
            ]            
    };
    render() {
        return ( /*outputs the heading text for the gameread.js to the screen, and also runs code that allows for the code from games.js to run properly and output to the screen.*/ 
            <div className="App">
                <h1>These are the games</h1>
                <Games games={this.state.games}></Games>
            </div>
        );
    }
}