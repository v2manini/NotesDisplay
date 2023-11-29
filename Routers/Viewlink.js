const { Router}= require('express');
const router = Router();
const path = require('path');
const fs = require("fs");
const jsonman = require("../modules/jsonmani");

router.post('/getjson', async function (req, res) {
    let data = [] ;
    let folder = path.join(__dirname,"..","json");
    
    fs.readdirSync(folder).forEach(function (file) {
        if (file.endsWith("json")) data.push(file);
    });

    res.send(data);
});


router.post('/getdata', async function (req, res) {
    let folder = path.join(__dirname,"..","json",req.body.selec);

    jsonman.readjson(folder, function(err,data){
        if(err){
            console.log(err);
        } else{
            //console.log(data);
            res.send(data);
        }
    })

});

module.exports = router;
