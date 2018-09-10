var express = require('express');
var router = express.Router();

var data = 'global state';

router.use(function(req, res, next) {
	console.log('in api');
	next();
})

router.get('/get', (req, res) => {
    res.json({data: data})
});

router.post('/post/:newData', (req, res) => {
    data = req.params.newData;
    console.log('newData: ' + data);
    res.json({message: 'global state updated'});
});

router.use((req, res, next) => {
    res.json({404: 'no such route'})
});

module.exports = router;
