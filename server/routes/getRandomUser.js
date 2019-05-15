var express = require("express");
var router = express.Router();
const fs = require('fs');

var users;

fs.readFile( __dirname + '/users.json', "utf-8", (err, data) => {  
    if (err) throw err;
    users = JSON.parse(data);
    users = users.users
    //console.log("UUU", users)
});

router.get("/",function(req, res, next)
{
    
    var l = users.length;
    //console.log(l,users)
    var r = Math.floor(Math.random()*l)
    //console.log("HERE",users[r])
    var package = {
        NAME: users[r].NAME,
        IMG: users[r].NEWPIC.IMG,
        TITLE: users[r].NEWPIC.TITLE
    }
    //console.log(package)
    res.send(package)
    
})

module.exports = router;