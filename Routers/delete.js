const { Router}= require('express');
const router = Router();
const Mysql = require("../modules/mysql");

router.post('/deltedb', async function (req, res) {
    await Mysql.Realizar_Query(`delete from NotesUrl where id = ?;`,[req.body.id]);   
    console.log(`delete from NotesUrl where id = ${req.body.id};`);
    res.send("Se ha borrado correctamente");
});

module.exports = router;
