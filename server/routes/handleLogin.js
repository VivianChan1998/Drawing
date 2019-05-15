var express = require("express")
var router = express.Router();
const fs = require('fs');

var user_info;

fs.readFile(__dirname + '/user_info.json', "utf-8", (err, data) => {
    if(err) throw err;
    user_info = JSON.parse(data);
    //console.log(user_info)
})

router.post("/",function(req,res,next){
    let id = req.body.id
    let pw = req.body.pw
    console.log(id,pw)
    if(id === '' || pw === '') res.status(500).send('Missing');
    else if(user_info[id]===undefined) res.status(500).send('Cannot find ID!');
    else if(user_info[id].PW===pw) res.send('Success!')
    else res.send('Oops, wrong password')
})

module.exports = router