import React from 'react'; // pulls in code from react to be used in gamecreate.js and allow for the code within to be outputted into the react app if necessary
import axios from 'axios'; // pulls in code from axios to be used in gamecreate.js and allow for the code within to be outputted into the app if necessary
import '../App.css';

export class Gamecreate extends React.Component { // extends from and uses the code from react

    constructor() {
        super(); // calls parent's constructor method and gets access to the parent's properties and methods

        this.onSubmit = this.onSubmit.bind(this); // binds the code for the submit button to allow it to submit the contents entered
        this.onChangeName = this.onChangeName.bind(this); // binds the code for a game title/name to be inputted and then submitted from the gamecreate.js page in the react app
        this.onChangeYearofrelease = this.onChangeYearofrelease.bind(this); // binds the code for a game's year of release to be inputted and then submitted from the gamecreate.js page in the react app
        this.onChangeImage = this.onChangeImage.bind(this); // binds the code for a game poster/image to be inputted and then submitted from the gamecreate.js page in the react app

        this.state = { /*calls the name, year of release and poster/image values to the screen */
            Name: '',
            Yearofrelease: '',
            Image: ''
        }
    }

    onChangeName(e) { /* calls the name method for the gamecreate.js page to allow the information inputted to be outputted*/
        this.setState({
            Name: e.target.value
        });
    }

    onChangeYearofrelease(e) { /* calls the yearofrelease method for the gamecreate.js page to allow the information inputted to be outputted*/
        this.setState({
            Yearofrelease: e.target.value
        });
    }

    onChangeImage(e) { /* calls the image method for the gamecreate.js page to allow the information inputted to be outputted*/
        this.setState({
            Image: e.target.value
        });
    }
    onSubmit(e) { /*calls the submit button's method on the gamecreate.js page to submit the information inputted to the localhost port specified within the axios method in the url, logging into the console then if the server responded successfully, an error message to pop up if something goes wrong */
        e.preventDefault();
        alert("Game: " + this.state.Name + " "
            + this.state.Yearofrelease + " " +
            this.state.Image);

            const newGame = {
                name: this.state.Name,
                yearofrelease: this.state.Yearofrelease,
                image: this.state.Image
            }
            axios.post('http://localhost:4000/api/games', newGame)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });

    }

    render() {
        return ( /* outputs the forms into the gamecreate.js page on screen to have a new game title/name, year of release, and image outputted in via a button. */
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Game Title/Name: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Game's Year Of Release: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Yearofrelease}
                            onChange={this.onChangeYearofrelease}></input>
                    </div>
                    <div className="form-group">
                        <label>Game's Image: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Image}
                            onChange={this.onChangeImage}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Add Game'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}