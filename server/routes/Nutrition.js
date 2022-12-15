const express = require ('express');
const router = express.Router()
const { Nutrition } = require("../models")

router.post("/", async (req, res) => {
    const nutritionPost = req.body;
    await Nutrition.create(nutritionPost);
    res.json(nutritionPost)
})

module.exports = router