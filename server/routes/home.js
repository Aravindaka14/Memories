import express from "express";
import Post from "../modals/Post.js";

const router = express.Router()
router.get("/home", async (req, res) => {
    await Post.find().then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

router.put("/home/update", async (req, res) => {
    let like = await Post.find({ _id: req.body.id })
    like = like[0].likes + 1
    await Post.updateOne({ _id: req.body.id }, { likes: like })
    res.status(200).send("likes updated")
})
export default router;