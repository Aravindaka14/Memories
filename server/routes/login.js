import express from "express";
import User from "../modals/User.js";
import bcrypt from "bcryptjs";
// import crypto from "crypto";

const router = express.Router();
// const secretKey = crypto.randomBytes(64).toString("hex");

router.post("/login", (req, res) => {
    User.find({ email: req.body.email }).then((userdata) => {
        if (userdata.length) {
            bcrypt.compare(req.body.password, userdata[0].password).then((val) => {
                if (val) {
                    res.status(200).send(userdata)
                } else {
                    res.status(400).send("Invalid Password")
                }
            }).catch((err) => {
                res.status(400).send(err)
            })
        } else {
            res.status(400).send("Email doesn't exist")
        }
    }).catch((err) => {
        res.status(400).send(err)
    })
})

export default router;