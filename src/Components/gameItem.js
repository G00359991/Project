import React from 'react'; // pulls in code from react to be used in gameItem.js and allow for the html to be outputted into the react app
import Card from 'react-bootstrap/Card'; // pulls down from bootstrap for added css styling on the card
import Button from 'react-bootstrap/Button'; // pulls down from bootstrap for added css styling on the button
import axios from 'axios'; // pulls in code from axios to be used in gameItem.js and allow for the code within to be outputted into the app if necessary
import {Link} from 'react-router-dom'; // pulls in code from react-router-dom to be used in gameItem.js and allow for the link code within to be outputted into the app if necessary
import '../App.css';

export class GameItem extends React.Component { // extends from and uses the code from react

    constructor(){
        super(); // invokes the parent's constructor

        this.DeleteGame = this.DeleteGame.bind(this); // binds the delete method to the instance
    }

    DeleteGame(e){ // method used to delete a game 
        e.preventDefault(); // prevents method from being called everytime page is loaded
        console.log("Delete: "+ this.props.game._id); // logs into the console that the game has been deleted

        axios.delete("http://localhost:4000/api/games/"+this.props.game._id) /* deletes game on screen at specified url and allows for the data to be reloaded */
        .then(()=>{
            this.props.ReloadGameData();
        })
        .catch();
    }

    render() {
        return ( /*outputs the code down below and inputs it into a card format for the screen*/
            <div className="App">
                <Card>
                    <Card.Header>{this.props.game.name}</Card.Header> 
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.game.image} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.game.yearofrelease}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/gameedit/"+ this.props.game._id} className="btn btn-primary">Edit Game</Link>
                    <Button variant="danger" onClick={this.DeleteGame}>Delete Game</Button>
                </Card>
            </div>
        );
    }
}