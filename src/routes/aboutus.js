const express = require('express');
const router = express.Router();

router.get('/aboutus', (req, res) => {

    console.log('CONSOLELOG: ')
    res.render('aboutus/aboutus')   , {
        isListEnabled: true,
        style: '/Users/plt22/Desktop/fendepcl/src/public/css/aboutus.css'}; 
});

module.exports = router;