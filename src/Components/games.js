import React from 'react'; // pulls in code from react to be used in games.js and allow for the code in this file to be outputted into the react app
import '../App.css';
import { GameItem } from './gameItem'; // pulls in code from the gameItem.js component to be used in movies.js, which will then be brought in and used in read.js and App.js

export class Games extends React.Component { // extends from and uses the code from react

    render() {
        return this.props.games.map ( (game)=>{
            return <GameItem game={game} ReloadGameData={this.props.ReloadGameData}></GameItem>
        }); /*Code up above outputs in the background and runs code necessary to put the information about games in gameItem.js on to the screen without issue and allow it to reload the data */
    }
}