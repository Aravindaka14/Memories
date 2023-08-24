import express from "express";
import User from "../modals/User.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
// import crypto from "crypto";

const router = express.Router();
// const secretKey = crypto.randomBytes(64).toString("hex");

router.post("/login", (req, res) => {
    User.find({ email: req.body.email }).then((userdata) => {
        // console.log(userdata)
        if (userdata.length) {
            bcrypt.compare(req.body.password, userdata[0].password).then((val) => {
                // console.log(val)
                if (val) {
                    // const authToken = Jwt.sign(userdata[0].name, process.env.secretKey);
                    // res.status(200).send({ authToken });
                    res.status(200).send('login successful')
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
    // res.send("login api")
})

export default router;