const { Router}= require('express');
const router = Router();

router.get('/',  function (req, res) {
    res.render("inicio")
});

router.get('/view',  function (req, res) {
    res.render("view")
});

module.exports = router;
