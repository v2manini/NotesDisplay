const { Router}= require('express');
const router = Router();
const Mysql = require("../modules/mysql");
const {pb} = require("../modules/poket-base");


router.post('/getjsondb', async function (req, res) {
    let data;
    let newdata;
    if (req.query.DB == "PB") {
        data = await pb.collection('NotesUrl').getFullList(200 /* batch size */, {
            sort: '-created',
            fields: "Subtipo",
        });
        newdata = data.map(function (Valvue) {
            return  Valvue.Subtipo;
        });
        newdata= newdata.filter(onlyUnique);
    }else {
        data = await Mysql.Realizar_Query(`select distinct subtipo from NotesUrl;`); 
        // console.log("Data = ", data)
        newdata = data.map(function (Valvue) {
            return  Valvue.subtipo;
        });
    };     


    //console.log(newdata)
    if(!newdata) return res.send(newdata = []);
    res.send(newdata);
});


router.post('/getdatadb', async function (req, res) {
    let data;
    console.log("getdatadb")
    if (req.query.DB == "PB") {
        data = await pb.collection('NotesUrl').getFullList(200 /* batch size */, {
            sort: '-created',
        });
        data = data.map(function (Valvue) {
            return  Valvue.Subtipo == req.body.selec;
        });
        console.log("Data : ",data)
    } else{
        data = await Mysql.Realizar_Query(`select * from NotesUrl where subtipo = "${req.body.selec}";`); 
    };
    res.send(data);
});

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

module.exports = router;
