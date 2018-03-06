var express = require('express');
var router = express.Router();
const User = require('../models/user')

router.get('/', function(req, res, next) {
    User.findOne({}, function(err, user){
        if(err){
            return res.send('Error')
        }
        res.render("test", { email: user.email })
    })
});

router.post('/', (req, res) => {
    let email = req.body.email;
    let user = new User({
        firstName: "Wayne",
        lastName: "Tucker",
        password: "worksucks123",
        email: email,
    })
    user.save();
    res.redirect('/');
})

module.exports = router;
