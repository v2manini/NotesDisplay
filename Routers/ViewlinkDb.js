const { Router}= require('express');
const router = Router();
const Mysql = require("../modules/mysql");


router.post('/getjsondb', async function (req, res) {
    let data;
    let newdata;

    data = await Mysql.Realizar_Query(`select distinct subtipo from NotesUrl ORDER BY subtipo DESC;`); 
        // console.log("Data = ", data)
    newdata = data.map(function (Valvue) {
            return  Valvue.subtipo;
    });

    //console.log(newdata)
    if(!newdata) return res.send(newdata = []);
    res.send(newdata);
});


router.post('/getdatadb', async function (req, res) {
    let data = await Mysql.Realizar_Query(`select * from NotesUrl where subtipo = "${req.body.selec}" ORDER BY id DESC;`); 
    res.send(data);
});

module.exports = router;
