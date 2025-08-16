const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Post = require('../models/post.model');
const requireLogin = require('../middleware/reqlogin');


router.get('/user/:id', async (req, res) => {
    try{
        const post = await Post.find({ postedBy: req.params.id })
        return res.status(200).json(post);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.put('/follow',requireLogin ,async (req, res) => {
    const user = await User.findByIdAndUpdate(req.body.followId, {
        $push: { followers: req.user._id }})

    await User.findByIdAndUpdate(req.user._id, {
        $push: { following: req.body.followId }
    })
    return res.status(200).json({msg:"Followed successfully"});
})

router.put('/unfollow', requireLogin, async (req, res) => {
    const user = await User.findByIdAndUpdate(req.body.unfollowId, {
        $pull: { followers: req.user._id }})
    await User.findByIdAndUpdate(req.user._id, {
        $pull: { following: req.body.unfollowId }
    })
    return res.status(200).json({msg:"Unfollowed successfully"});
})

module.exports = router;