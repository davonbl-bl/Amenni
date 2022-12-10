const express = require ('express')
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
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);

    
})



module.exports = router