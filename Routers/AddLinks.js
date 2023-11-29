const { Router}= require('express');
const router = Router();
const getMetaData = require('metadata-scraper');
const jsonman = require("../modules/jsonmani");
const Mysql = require("../modules/mysql");

router.post('/add', async function (req, res) {
    var nombre = req.body.nombre;
    nombre.replace(/\s/g, '');

    let data = req.body.txtbox;
    let page = "";

    data = data.trim().split(/\s+/);
    try{
        data = await geturldata(data);
        if (req.body.Selec == "data-base") {
            await data.forEach( async data => {
                await Mysql.Realizar_Query(`insert into NotesUrl (url, nombre, descrip, tipo, subtipo,limag,pimag) values ("${data.url}","${data.nombre}","${data.descrip}","${data.tipo}","${nombre}","${data.limag}","${data.pimag}");`);   
            });
                 page = "viewdb";
        } else {
                jsonman.writejson(data,nombre);  
                page = "view";
        }
    }catch (error) {console.log(error);}

    res.render(page);//Inicio
});


async function geturldata(urls) {
        let ArraAux = [];
        let Urldata ;
        let Objs;
        let idNum = 0;
        for (let i = 0; i < urls.length; i++) {
            Urldata = await getMetaData(urls[i]);
            //console.log(Urldata);
           Objs =  {
                id : idNum,
                url : Urldata.url,
                nombre : Urldata.title,
                descrip : Urldata.description.slice(0,500),
                tipo : Urldata.provider,
                Subtipo: "",
                limag : "Ninguna",
                pimag : Urldata.image
           };
           ArraAux.push(Objs);
           idNum++;
        }
        return ArraAux;
}
module.exports = router;
