const express = require('express'); // allows web page/server to use the express code
const app = express(); // allows express to run on the app
const port = 4000; // the port in the url the server's information will be outputted to
const cors = require('cors'); // allows web page/server to use the cors code
const bodyParser = require("body-parser"); // allows web page/server to use the body-parser code

app.use(cors()); // has the app use the cors code
app.use(function(req, res, next) { /* gives access to the methods and headers within for the app to use for functionality, and allows the user to send the request and get a response from the server for the methods*/
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/games', (req, res) => { /* gets a request to the web page/server using the specified url for a response to send the json data below.*/
    
    const mygames = [
        {
            "Name":"Tomb Raider 2",
            "Yearofrelease":"1997",
            "Image":"https://upload.wikimedia.org/wikipedia/en/d/d4/Tomb_Raider_II.png"
            },
            {
            "Name":"Crash Bandicoot",
            "Yearofrelease":"1996",
            "Image":"https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png"
            }
    ];
    res.status(200).json({ /*Makes the server respond if the json information outputs with the message below */
        message: "Everything is ok",
        games:mygames});
})

app.post('/api/games', (req, res) => { /* requests a response of the server to log into the console the year of release, title/name and image of the games, as well as the message saying the game was received*/
    console.log('Game recieved!');
    console.log(req.body.name);
    console.log(req.body.yearofrelease);
    console.log(req.body.image);
})

app.listen(port, () => { /*Will log into the console that the app is listening at the specified port for the latest changes made to the app/web page */
    console.log(`Example app listening at http://localhost:${port}`)
})