const { Router}= require('express');
const router = Router();
const Mysql = require("../modules/mysql");

router.get('/deltedb/:id', async function (req, res) {
    console.log('/deltedb/',req.params.id)
    await Mysql.Realizar_Query(`delete from NotesUrl where id = ${req.params.id};`);   
    res.redirect("/viewdb")
});

module.exports = router;
