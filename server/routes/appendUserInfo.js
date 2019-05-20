var express = require("express");
var router = express.Router();
const fs = require('fs');


router.post('/', (req, res, next) => {
    var id = req.body.ID
    var PW2 = req.body.pw2
    var obj = {
        PW: req.body.pw,
        Info: req.body.info,
        Style:{
            bg: req.body.bg
        } 
    }
    //var obj_json = JSON.stringify(obj)

    fs.readFile(__dirname + '/user_info.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        AllData = JSON.parse(data); //now it an object
        AllData.push
        AllDatastr = JSON.stringify(AllData, null, 4); //convert it back to json
        fs.writeFile(__dirname + '/UserImg.json', AllDatastr, (err) => {
            if(err) console.log(err)
            res.send('done')
        }); // write it back 
    }});//should be modified into writeSync some day

})

module.exports = router