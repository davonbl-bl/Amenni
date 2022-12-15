const express = require("express");
const mysql = require ("mysql");
const cors = require ("cors");

const app = express();
// middleware
app.use (cors());
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

const commentsRouter = require ('./routes/Comments');
app.use ('/comments', commentsRouter)

const nutritionRouter = require('./routes/Nutrition')
app.use('/nutrition', nutritionRouter)

const userRouter = require('./routes/Users')
app.use('/offical', userRouter)
// offical == auth

db.sequelize.sync().then(() =>{ 
    entryPoint();
})

const entryPoint = () => { app.listen(PORT, () => {
    console.log('Server stated on http://localhost:8420');
    console.log("Press CTRL + C to stop server");
 
})}

