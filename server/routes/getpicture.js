var express = require("express");

var router = express.Router();
const fs = require('fs');

var user_img;

router.get("/:id",function(req, res, next){
    fs.readFile( __dirname + '/UserImg.json', "utf-8", (err, data) => {  
        if (err) throw err;
        user_img = JSON.parse(data);
        //console.log(user_img);
    });
    console.log("O:)")
    //console.log(user_img);
    var id = req.params.id;
    res.send(user_img[id])
})

module.exports = router;