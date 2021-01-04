import React from 'react';
import '../App.css';

export class Gamecontent extends React.Component { // extends from and uses the code from react

    render() {
        return ( /* outputs hello world heading to the screen along with outputting a code that will display the current date and time */
            <div className="App">
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }


}