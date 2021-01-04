import React from 'react'; // pulls in code from react to be used in Gamefooter.js and allow for the code within to be outputted into the react app if necessary
import '../App.css';

export class Gamefooter extends React.Component { // extends from and uses the code from react

    render(){
        return( // outputs the heading text for the footer to the screen
            <div className="App">
                <h1>My Footer is another component</h1>
            </div>    
        );
    }


}