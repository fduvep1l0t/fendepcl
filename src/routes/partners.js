const express = require('express');
const router = express.Router();

router.get('/partners', (req, res) => {

    res.render('partners/partners', {
        isListEnabled: true,
        style: '/Users/plt22/Desktop/fendepcl/src/public/css/partners.css'});
});

module.exports = router;