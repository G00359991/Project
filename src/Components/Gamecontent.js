import React from 'react'; // pulls in code from react to be used in Gamecontent.js and allow for the code within to be outputted into the react app if necessary
import '../App.css';

export class Gamecontent extends React.Component { // extends from and uses the code from react

    render() {
        return ( /* outputs hello world heading to the screen along with outputting a code that will display the current date and time */
            <div className="App">
                <h1>Hello Gamers!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }


}