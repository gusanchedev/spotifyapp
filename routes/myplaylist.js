const express = require('express');
const router =  express.Router();

router.get('/', function(req, res, next){
    res.render("myplaylist.njk");
});

module.exports = router;