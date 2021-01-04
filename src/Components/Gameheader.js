import React from 'react';
import '../App.css';

export class Gameheader extends React.Component { // extends from and uses the code from react

    render() {
        return ( // outputs the heading text for the header to the screen
            <div className="App">
                <h1>My Header is another component</h1>
            </div>
        );
    }
}