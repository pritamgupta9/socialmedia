const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const requireLogin = require('../middleware/reqlogin');
const userModel = require('../models/user.model');

router.post('/signup', async (req, res) => {
    const { name, email, password, pic } = req.body;

    if( !name || !email || !password) {
        return res.status(422).json({ error: 'Please add all the fields' });
    }
    try{
        const savedUser = await userModel.findOne({
            email: email
        })
        if(savedUser) {
            return res.status(422).json({ error: 'User already exists with that email' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            pic
        });
        await user.save();
        res.status(201).json({ msg: 'User created successfully' });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: 'Please add email and password' });
    }

    try {
        const savedUser = await userModel.findOne({ email });
        if (!savedUser) {
            return res.status(422).json({ error: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, savedUser.password);
        if (!isMatch) {
            return res.status(422).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: savedUser._id }, "aaaaaaaaaa", { expiresIn: '1d' });
        return res.status(200).json({ token, user: savedUser });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})