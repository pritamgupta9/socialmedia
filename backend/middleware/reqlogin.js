const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const requireLogin = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'You must be logged in' });
    }
    const token = authorization.replace("Bearer ", "");
    try {
     const payload = jwt.verify(token,"aaaaaaaaaa");
     const {id} = payload;
     const userData = await User.findById(id);
     if(!userData) {
         return res.status(401).json({ error: 'User not found' });
     }
        req.user = userData;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'You must be logged in' });
    }
}
module.exports = requireLogin;