import express from "express";
import User from "../modals/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();
const salt = 10;

const checkExistingEmail = async (email) => {
    let inValid = false;
    await User.find({ email: email }).then((data) => {
        if (data.length) {
            inValid = true;
        }
    })
    return inValid;
}

router.post("/register", async (req, res) => {
    // res.status(200).send("register Api")
    // console.log(req.body.phone)
    if (await checkExistingEmail(req.body.email)) {
        res.status(400).send("Email already exist")
    } else {
        await bcrypt.genSalt(salt).then((saltHash) => {
            bcrypt.hash(req.body.password, saltHash).then((passHash) => {
                User.create({ name: req.body.name, email: req.body.email, phone: req.body.phone, password: passHash, }).then((data) => {
                    res.status(200).send(`${req.body.name} created successfully`)
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })
    }
});

export default router;