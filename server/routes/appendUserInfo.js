var express = require("express");
var router = express.Router();
const fs = require('fs');


router.post('/', (req, res, next) => {
    var id = req.body.id
    var PW2 = req.body.pw2
    var obj = {
        PW: req.body.pw,
        Info: req.body.info,
        Style:{
            bg: req.body.color
        } 
    }
    if(id==undefined || PW2===undefined || obj.PW === undefined || obj.Info===undefined || obj.Style.bg === undefined){
        res.send('missing information')
        return;
    }
    if(obj.PW !== PW2){
        res.send('password mismatch!')
        return;
    }
    //var obj_json = JSON.stringify(obj)

    fs.readFile(__dirname + '/user_info.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            AllData = JSON.parse(data); //now it an object
            if(AllData[id] !== undefined) {
                res.send('user name exists!')
            }else{
                AllData[id] = obj
                console.log(AllData)
                AllDatastr = JSON.stringify(AllData, null, 4); //convert it back to json
                fs.writeFile(__dirname + '/user_info.json', AllDatastr, (err) => {
                    if(err) console.log(err)
                });
                var user_obj = {
                    ID: 4,
                    NAME: id,
                    NEWPIC: {
                        IMG: "https://i.imgur.com/2bgT7iM.gif",
                        TITLE: "New user!"
                    }
                }
                append_user(user_obj, id);
                res.send("Success! renew the page and log in:)")
            } 
    }});//should be modified into writeSync some day


    

})

function append_user(user_obj, id) {

    fs.readFile(__dirname + '/users.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        AllData = JSON.parse(data); //now it an object
        AllData["users"].push(user_obj);
        console.log(AllData)
        AllDatastr = JSON.stringify(AllData, null, 4); //convert it back to json
        fs.writeFile(__dirname + '/users.json', AllDatastr, (err) => {
            if(err) console.log(err)
            res.send('1')
        }); // write it back 
    }});//should be modified into writeSync some day
    fs.readFile(__dirname + '/UserImg.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            AllData = JSON.parse(data); //now it an object
            AllData[id] = []
            //console.log(id, AllData[id])
            AllDatastr = JSON.stringify(AllData, null, 4); //convert it back to json
            fs.writeFile(__dirname + '/UserImg.json', AllDatastr, (err) => {
                if(err) console.log(err)
                res.send('done')
            });
        }
    })

    fs.readFile(__dirname + '/banner.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            AllData = JSON.parse(data); //now it an object
            AllData[id] = "https://i.imgur.com/K4sgvK1.gif"
            //console.log(id, AllData[id])
            AllDatastr = JSON.stringify(AllData, null, 4); //convert it back to json
            fs.writeFile(__dirname + '/banner.json', AllDatastr, (err) => {
                if(err) console.log(err)
                res.send('done')
            });
        }
    })
}

module.exports = router