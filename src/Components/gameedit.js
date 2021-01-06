import React from 'react'; // pulls in code from react to be used in gameedit.js and allow for the code within to be outputted into the app if necessary
import axios from 'axios'; // pulls in code from axios to be used in gameedit.js and allow for the code within to be outputted into the app if necessary
import '../App.css';

export class Gameedit extends React.Component { // extends from and uses the code from react
    constructor(props) {
        super(props); // calls parent's constructor method and gets access to the parent's properties and methods

        this.onSubmit = this.onSubmit.bind(this); // binds the code for the submit button to allow it to submit the contents entered
        this.onChangeName = this.onChangeName.bind(this); // binds the code for a game title/name to be inputted and then submitted from the gameedit.js page in the react app
        this.onChangeYearofrelease = this.onChangeYearofrelease.bind(this); // binds the code for a game's year of release to be inputted and then submitted from the gameedit.js page in the react app
        this.onChangeImage = this.onChangeImage.bind(this); // binds the code for a game image/poster to be inputted and then submitted from the gameedit.js page in the react app

        this.state = { /*calls the name, year of release and image/poster values to the screen */
            Name: '',
            Yearofrelease: '',
            Image: ''
        }
    }

    componentDidMount(){ /*fetches the necessary jsonblob information to be outputted in gameedit.js in order to acquire the necessary updated data for the games to be outputted to the screen at the localhost port specified below in the url. Will log into the console the updated data if successful. An error message to pop up in the console in case something goes wrong. */
        console.log(this.props.match.params.id);

        axios.get('https://localhost:4000/api/games/'+ this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Name:response.data.name,
                Yearofrelease:response.data.yearofrelease,
                Image:response.data.image
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    onChangeName(e) { /* calls the name method for the gameedit.js page to allow the information inputted to be outputted*/
        this.setState({
            Name: e.target.value
        });
    }

    onChangeYearofrelease(e) { /* calls the year of release method for the gameedit.js page to allow the information inputted to be outputted*/
        this.setState({
            Yearofrelease: e.target.value
        });
    }

    onChangeImage(e) { /* calls the image method for the gameedit.js page to allow the information inputted to be outputted*/
        this.setState({
            Image: e.target.value
        });
    }
    onSubmit(e) { /*calls the submit button's method on the gameedit.js page to submit the information inputted to the localhost port specified within the axios method in the url, logging into the console then if the server responded successfully, an error message to pop up if something goes wrong. Used for both posting and updating data */
        e.preventDefault();
        alert("Game: " + this.state.Name + " "
            + this.state.Yearofrelease + " " +
            this.state.Image);

            const newGame = {
                name: this.state.Name,
                yearofrelease: this.state.Yearofrelease,
                image: this.state.Image,
                _id: this.state._id
            }

            axios.put('http://localhost:4000/api/games/'+this.state._id, newGame)
            .then(res =>{
                console.log(res.data);
            })
            .catch();

            axios.post('http://localhost:4000/api/games', newGame)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });

    }

    render() {
        return ( /* outputs the forms into the gameedit.js page on screen to edit the game name, year of release, and image/poster selected via a button. */
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Game Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Game's Year of release: </label>
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
                            value='Edit Game'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}