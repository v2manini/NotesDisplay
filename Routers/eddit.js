const { Router}= require('express');
const router = Router();
const Mysql = require("../modules/mysql");
let {ParseQuery,ParseQuerytoData} = require("../modules/utils/parseSql");


router.get('/edit/:id', async function (req, res) {
    let data = await Mysql.Realizar_Query(`select * from NotesUrl where id = ?;`,[req.params.id]); 
    
    let objaux = {
        id : data[0].id,
        url : data[0].url,
        nombre : data[0].nombre,
        descrip : ParseQuerytoData(data[0].descrip),
        tipo : data[0].tipo,
        Subtipo : data[0].Subtipo,
        limag : data[0].limag,
        pimag : data[0].pimag
    }
    res.render("edit",objaux);
});


router.post('/edit/subtipo', async function (req, res) {
    await Mysql.Realizar_Query(`update NotesUrl set Subtipo = ? where id = ? ;`,[req.body.Subtipo,req.body.id]);
    res.send("Se ha acutalizado");
});

router.post('/edit/update', async function (req, res) {
    await Mysql.Realizar_Query(`update NotesUrl set url = ? ,nombre = ?,
    descrip = ?,tipo = ?,Subtipo = ?,limag = ? ,pimag = ? where id = ?;`,[req.body.url,req.body.nombre,
    req.body.descrip,req.body.tipo,req.body.subtipo,req.body.limag,req.body.pimag,req.body.id]);  
    res.redirect("/viewdb");
});
module.exports = router;
