var express = require("express");
var router = express.Router();
const fs = require('fs');


router.post('/', (req, res, next) => {
    let id = req.body.ID
    var obj = {
        source: req.body.source,
        title: req.body.title,
        content: req.body.content
    }
    //var obj_json = JSON.stringify(obj)

    fs.readFile(__dirname + '/UserImg.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        AllData = JSON.parse(data); //now it an object
        if(id !== undefined) AllData[id].push(obj)
        console.log(id, AllData[id])
        AllDatastr = JSON.stringify(AllData, null, 4); //convert it back to json
        fs.writeFile(__dirname + '/UserImg.json', AllDatastr, (err) => {
            if(err) console.log(err)
            res.send('Success!')
        }); // write it back 
    }});//should be modified into writeSync some day

})

module.exports = router