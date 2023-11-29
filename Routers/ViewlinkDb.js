const { Router}= require('express');
const router = Router();
const Mysql = require("../modules/mysql");

router.post('/getjsondb', async function (req, res) {
    let data = await Mysql.Realizar_Query(`select distinct subtipo from NotesUrl;`); 
    console.log("Data = ", data)

    let newdata = data.map(function (Valvue) {
        return  Valvue.subtipo;
    });
    //console.log(newdata)
    res.send(newdata);
});


router.post('/getdatadb', async function (req, res) {
    let data = await Mysql.Realizar_Query(`select * from NotesUrl where subtipo = "${req.body.selec}";`); 
    res.send(data);
});



module.exports = router;
