const express = require("express");
const mysql = require ("mysql")

const app = express();
const PORT = 8420;

//going over every model that we have created
const db= require ('./models')

// i need this to parse out the json
app.use(express.json())

//ROUTERS
// app.get("/", (req, res) => {
//     res.send("Testing");
// })

const postRouter = require ('./routes/Posts');
app.use ('/posts', postRouter)

db.sequelize.sync().then(() =>{ 
    entryPoint();
})

const entryPoint = () => { app.listen(PORT, () => {
    console.log('Server stated on http://localhost:8420');
    console.log("Press CTRL + C to stop server");
 
})}

