import React from 'react'; // pulls in code from react to be used in create.js and allow for the code within to be outputted into the react app if necessary
import '../App.css';

export class Gamecreate extends React.Component { // extends from and uses the code from react

    render() {
        return ( // outputs the heading text for the gamecreate.js to the screen
            <div className="App">
                <h1>My create is another component</h1>
            </div>
        );
    }
}