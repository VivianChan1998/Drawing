var express = require("express")
var router = express.Router();
const fs = require('fs');

var user_info;

fs.readFile(__dirname + '/user_info.json', "utf-8", (err, data) => {
    if(err) throw err;
    user_info = JSON.parse(data);
    //console.log(user_info)
})

router.get("/:id", (req, res, next) => {

    let id = req.params.id
    //console.log("UMMM", user_info)
    res.send(user_info[id]);

})

module.exports = router