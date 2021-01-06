import React, { Component } from 'react'; // pulls in code from react to be used in App.js and allow for the html to be outputted into the react app
import './App.css';
import { Gamecontent } from './Components/Gamecontent'; // pulls in code from the Gamecontent.js component to be used in App.js
import { Gamefooter } from './Components/Gamefooter'; // pulls in code from the Gamefooter.js component to be used in App.js
import { Gameheader } from './Components/Gameheader'; // pulls in code from the Gameheader.js component to be used in App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // pulls down from bootstrap for added css styling in the app
import { Navbar, Nav } from 'react-bootstrap'; // pulls the navbar css from online.

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // pulls from react-router-dom that was installed to add to the app's navbar and links
import { Gamecreate } from './Components/gamecreate'; // pulls in code from the gamecreate.js component to be used in App.js
import { Gameread } from './Components/gameread'; // pulls in code from the gameread.js component to be used in App.js
import { Gameedit } from './Components/gameedit'; // pulls in code from the gameedit.js component to be used in App.js

class App extends React.Component { // extends from and uses the code from react


  render() { 
    return ( /* outputs the navbar and nav links to the screen */
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gamecreate">Create</Nav.Link>
            <Nav.Link href="/gameread">Read</Nav.Link>
          </Nav>
          </Navbar>
          <Switch>
            <Route path='/' component={Gamecontent} exact></Route> 
            <Route path='/gamecreate' component={Gamecreate} ></Route>
            <Route path='/gameread' component={Gameread} ></Route>
            <Route path='/gameedit/:id' component={Gameedit} ></Route> 
          </Switch>
      </div>
      </Router>
    ); 
  }
}

export default App; // allows the code to run and show the app made on a browser window.
