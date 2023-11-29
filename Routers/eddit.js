const { Router}= require('express');
const router = Router();
const path = require('path');

const Mysql = require("../modules/mysql");
const jsonman = require("../modules/jsonmani");


router.get('/edit/:id', async function (req, res) {
    let data = await Mysql.Realizar_Query(`select * from NotesUrl where id = ${req.params.id};`); 
    
    let objaux = {
        id : data[0].id,
        url : data[0].url,
        nombre : data[0].nombre,
        descrip : data[0].descrip,
        tipo : data[0].tipo,
        Subtipo : data[0].Subtipo,
        limag : data[0].limag,
        pimag : data[0].pimag
    }
    res.render("edit",objaux);
});

router.get('/edit/json/:jsonname/:id', async function (req, res) {
    //req.params.id
    let fileJson = path.join(__dirname,"..","json",req.params.jsonname);

    jsonman.readjson(fileJson, function(err,data){
        if(err){console.log(err);} else{
            data = JSON.parse(data);
            let objaux = {
                id : data[req.params.id].id,
                url : data[req.params.id].url,
                nombre : data[req.params.id].nombre,
                descrip : data[req.params.id].descrip,
                tipo : data[req.params.id].tipo,
                Subtipo : data[req.params.id].Subtipo,
                limag : data[req.params.id].limag,
                pimag : data[req.params.id].pimag,
                jsonName : req.params.jsonname
            };
        
            res.render("edit",objaux);
        };
    })
});



router.post('/edit/update', async function (req, res) {
    if (req.body.jsonName.length > 2) {
        updateJson(req);
    } else {
        await Mysql.Realizar_Query(`update NotesUrl set url = "${req.body.url}",nombre = "${req.body.nombre}",descrip = "${req.body.descrip}",
        tipo = "${req.body.tipo}",Subtipo = "${req.body.subtipo}",limag = "${req.body.limag}" ,pimag = "${req.body.pimag}"
        where id = ${req.body.id};`);  
    }
    res.redirect("/view");
});


function updateJson(req) { // actualizo el archivo
    let fileJson = path.join(__dirname,"..","json",req.body.jsonName);

    jsonman.readjson(fileJson, function(err,data){
            if(err) return console.error(err);
            data = JSON.parse(data);

            swapJsondata(req.body.id,data,req.body); // cambio los valores           
            jsonman.overwritejson(data,req.body.jsonName); 
    });
};

function swapJsondata(id,data,newdata) {
    // console.log("id = ",id)
    // console.log("Url = ",olddata[id].url)
    // console.log("newdata = ",newdata)

    data[id].url = newdata.url;
    data[id].nombre = newdata.nombre;
    data[id].descrip = newdata.descrip;
    data[id].tipo = newdata.tipo;
    data[id].subtipo = newdata.subtipo;
    data[id].limag = newdata.limag;
    data[id].pimag = newdata.pimag;
};

module.exports = router;
