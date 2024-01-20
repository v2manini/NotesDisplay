const { Router}= require('express');
const router = Router();
const {mysql_Upload} = require("../modules/utils/mysql_Upload");
const {geturldata} = require("../modules/utils/GeturlData");

router.post('/add', async function (req, res) {
    var nombre = req.body.nombre;
    nombre.replace(/\s/g, '');

    let data = req.body.txtbox;

    data = data.trim().split(/\s+/);
    data = await geturldata(data);// Busco los datos para guardalos en la db
    await mysql_Upload(data,nombre);

    res.redirect("/viewdb");//Inicio
});

module.exports = router;
