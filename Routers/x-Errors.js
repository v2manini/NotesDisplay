const { Router}= require('express');
const router = Router();

router.get('*', async function (req, res) {
    res.render("x-Error_404")
});

module.exports = router;
