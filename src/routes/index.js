const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('msg from routes/index by plt');
    console.log('CONSOLELOG from index.js');

    res.render('index/index');  /*, {
        title: 'Index Page',
        name: 'Felipe Duve'
    });*/

});

//exportar como
module.exports = router;