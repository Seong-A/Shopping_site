const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res, next) => { 
    try {
        const user = new User(req.body);
        await user.save();
        return res.sendStatus(200);
    } catch (error) {
        next(error); // 에러 발생 시 next(error) 호출
    }
});

module.exports = router;
