const express = require ('express');
const router = express.Router()
const { Comments } = require("../models")
const {confirmToken} = require('../middlewares/AuthMiddleware')

router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    //containing the obj of the specific post we want, snd
    //the primary key (findByPk) is in reference to fetching the id in the db
    const comments = await Comments.findAll({where: {PostId: postId}});
    res.json(comments);
})

router.post("/", confirmToken, async (req, res) => {
    const commentPost = req.body;
    const username = req.user.username;
    commentPost.username = username; 
    await Comments.create(commentPost);
    res.json(commentPost)
})



module.exports = router