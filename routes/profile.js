const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {    
    res.send('profile home');
})

router.get('/oauth2callback', (req, res) => {
    var resObj = [
        {'name': 'Phani', 'place': 'Bangalore'},
        {'name': 'Kiran', 'place': 'Kadapa'}];
    res.redirect('https://pyzen5.github.io/pyon/', 301)
})

module.exports = router;