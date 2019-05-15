var express = require("express");
var router = express.Router();
const fs = require('fs');

var banners;

fs.readFile(__dirname + '/banner.json', "utf-8", (err,data) => {
    if(err) throw err;
    banners = JSON.parse(data)
});

router.get("/", function(req,res,next){
    console.log("banners: ", banners)
    res.send(banners)
})

module.exports = router