const { Router}= require('express');
const router = Router();
const getMetaData = require('metadata-scraper');
const fs = require("fs");
const jsonman = require("../modules/jsonmani");


router.post('/add', async function (req, res) {
    let nombre = req.body.nombre;
    let data = req.body.txtbox;
    
    data = data.trim().split(/\s+/);
    data = await geturldata(data);

    jsonman.writejson(data,nombre);
    res.render("inicio");
});


async function geturldata(urls) {
    let ArraAux = [];
    let Urldata ;
    let Objs;
    for (let i = 0; i < urls.length; i++) {
        Urldata = await getMetaData(urls[i]);
        //console.log(Urldata);
       Objs =  {
            id : i,
            url : Urldata.url,
            nombre : Urldata.title,
            desc : Urldata.description,
            tipo : Urldata.provider,
            Subtipo: "",
            limag : "",
            pimag : Urldata.image
       };
       ArraAux.push(Objs);
    }
    return ArraAux;
}
module.exports = router;
