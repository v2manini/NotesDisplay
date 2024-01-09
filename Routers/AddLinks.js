const { Router}= require('express');
const router = Router();
const jsonman = require("../modules/jsonmani");
const {mysql_Upload} = require("../modules/utils/mysql_Upload");
const {geturldata} = require("../modules/utils/GeturlData");
const {PB_upload} = require("../modules/utils/PB_Upload");

router.post('/add', async function (req, res) {
    var nombre = req.body.nombre;
    nombre.replace(/\s/g, '');

    let data = req.body.txtbox;
    let page = "";

    data = data.trim().split(/\s+/);
    try{
        data = await geturldata(data);// Busco los datos para guardalos en la db
        switch (req.body.Selec) {
            case "data-base":
                mysql_Upload(data,nombre);
                page = "/viewdb";
            break;
            case "data-pb":
                PB_upload(data,nombre);
                page = "/viewpb";
            break;
            case "json":
                jsonman.writejson(data,nombre);  
                page = "/view";
            break;

            default:
            break;
        }
    }catch (error) {console.log(error);}

    res.redirect(page);//Inicio
});

module.exports = router;
