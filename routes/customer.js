const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {    
    res.send('customer home');
})

router.get('/get', (req, res) => {
    var resObj = [
        {'name': 'Phani', 'place': 'Bangalore'},
        {'name': 'Kiran', 'place': 'Kadapa'}];
    res.send(resObj);
})

router.post('/add', (req,res) => {
    res.send('Customer added');
})

module.exports = router;