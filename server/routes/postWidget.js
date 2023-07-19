import express from "express";
import Post from "../modals/Post.js";

const router = express.Router()

router.post("/postwidget", async (req, res) => {

    await Post.create({ name: req.body.name, location: req.body.location, image: req.body.image, description: req.body.description }).then((data) => {
        res.status(200).send(data)
        console.log(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

export default router;