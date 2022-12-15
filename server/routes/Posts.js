const express = require ('express');
// const { FOREIGNKEYS } = require('sequelize/types/query-types');
const router = express.Router()
const { Posts } = require("../models")


router.get("/" , async (req, res) => {
    // res.send("Hello World");
    // res.json("Hello World");
    const allPosts = await Posts.findAll(); 
    res.json(allPosts)
})
/*
//logic - making a post request to the post route
//inside the request, we grab the post data from the body
//that is sent in the request
 and then we call the squelize function to
//create post--> insert into our table that is called posts
that exist in our mySQL workbench, and then return the data
that we send to make sure the data has been confirmed

*/

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    //containing the obj of the specific post we want, snd
    //the primary key (findByPk) is in reference to fetching the id in the db
    const post = await Posts.findByPk(id);
    res.json(post);
})

router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);

    
})



module.exports = router