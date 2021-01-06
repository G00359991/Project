const express = require('express'); // allows web page/server to use the express code
const app = express(); // allows express to run on the app
const port = 4000; // the port in the url the server's information will be outputted to
const cors = require('cors'); // allows web page/server to use the cors code
const bodyParser = require("body-parser"); // allows web page/server to use the body-parser code
const mongoose = require('mongoose'); // allows web page/server to use the mongoose code
const path = require('path'); // allows web page/server to use the path code

app.use(cors()); // has the app use the cors code
app.use(function(req, res, next) { /* gives access to the methods and headers within for the app to use for functionality, and allows the user to send the request and get a response from the server for the methods*/
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});



app.use(express.static(path.join(__dirname, '../build'))); // configuration used to tell the server where the build folder is
app.use('/static', express.static(path.join(__dirname, 'build//static'))); // configuration used to tell the server where the static folder is


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin:admin@cluster0.h25o5.mongodb.net/games?retryWrites=true&w=majority'; /*connects to the database */
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema; /*creates object for schema*/

const gameSchema = new Schema({ /*creates the name, year of release, and image/poster for the games for the new schema */
    name:String,
    yearofrelease:String,
    image:String
});

const GameModel = mongoose.model("game", gameSchema); // all created games will go to this model

app.get('/api/games', (req, res) => { /* gets a request to the web page/server using the specified url for a response to send the json data below.*/
    
    // const mygames = [
    //     {
    //         "Name":"Tomb Raider 2",
    //         "Yearofrelease":"1997",
    //         "Image":"https://upload.wikimedia.org/wikipedia/en/d/d4/Tomb_Raider_II.png"
    //         },
    //         {
    //         "Name":"Crash Bandicoot",
    //         "Yearofrelease":"1996",
    //         "Image":"https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png"
    //         }
    // ];

    GameModel.find((err, data)=>{ /* used to find the json data for the GameModel function and returns an error if it fails to do so */
        res.json(data);
    })   

    // res.status(200).json({ /*Makes the server respond if the json information outputs with the message below */
    //     message: "Everything is ok",
    //     games:mygames});
})

app.get('/api/games/:id', (req, res)=>{ /*listens for the get request and then returns a game back with the code below if it has that id */
    console.log(req.params.id);

    GameModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

app.put('/api/games/:id', (req, res)=>{ /*listens for the put request and then returns the game with inputted id to the screen with the adjustments made. If successful, will log down into the console that said game has been updated, and if not, an error will pop up. */
    console.log("Update Game: "+req.params.id);
    console.log(req.body);

    GameModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.delete('/api/games/:id', (req, res) => { /*listens for the delete request and then deletes a previously inputted game with the code below if it has that id. If successful, will log into the console that the game was deleted */
    console.log("Delete Game: "+ req.params.id);

    GameModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

app.post('/api/games', (req, res) => { /* requests a response of the server to log into the console the year of release, title/name and image of the games, as well as the message saying the game was received*/
    console.log('Game recieved!');
    console.log(req.body.name);
    console.log(req.body.yearofrelease);
    console.log(req.body.image);

    GameModel.create({
        name:req.body.name,
        yearofrelease:req.body.yearofrelease,
        image:req.body.image  
    })
    .then()
    .catch()

    res.send('Game Item Added'); // outputs a message to the screen if the post was successful saying 'Game Item Added'
})

app.get('*', (req, res)=>{ /*listens for the get request to send the index.html file from the directory */
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

app.listen(port, () => { /*Will log into the console that the app is listening at the specified port for the latest changes made to the app/web page */
    console.log(`Example app listening at http://localhost:${port}`)
})