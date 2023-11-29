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
        data = await geturldata(data);// Busco los datos para guardalos en la db
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
            if (urls[i].endsWith("jpg")|| urls[i].endsWith("jpeg") || urls[i].endsWith("png") || urls[i].endsWith("webp") || urls[i].endsWith("gif")) {
                Urldata = await getMetaData(urls[i]);
                ArraAux.push(getObje(idNum,urls[i],"Imagen/Pintura","",Urldata.provider,"","Ninguna",urls[i])); // Urldata.provider usar el urls[i]
                idNum++;
            } else {
                Urldata = await getMetaData(urls[i]);
                //console.log(Urldata);           
               ArraAux.push(getObje(idNum,Urldata.url,Urldata.title,Urldata.description.slice(0,500),Urldata.provider,"","Ninguna",Urldata.image));
               idNum++;
            }
        }
        return ArraAux;
}

// async function getSubdata(urls) {} // para futuro

function getObje(idNum,url,title,description,provider,Subtipo,limag,pimag) {

    Objs =  {
        id : idNum,
        url : url,
        nombre : title,
        descrip : description,
        tipo : provider,
        Subtipo: Subtipo,
        limag : limag,
        pimag : pimag
   };

   return Objs;
}
module.exports = router;
