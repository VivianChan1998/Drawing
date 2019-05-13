var express = require("express");

var router = express.Router();
const fs = require('fs');
var userData;


fs.readFile( __dirname + '/users.json', "utf-8", (err, data) => {  
    if (err) throw err;
    userData = JSON.parse(data);
    console.log(":O");
    console.log(userData);
});

router.get("/", function(req, res, next) {
    res.send(userData);
});

module.exports = router;