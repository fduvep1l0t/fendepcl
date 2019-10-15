const express = require('express');
const router = express.Router();

router.get('/news', (req, res) => {

    res.render('news/news', {
        isListEnabled: true,
        style: '/Users/plt22/Desktop/fendepcl/src/public/css/news.css'});
});

module.exports = router;