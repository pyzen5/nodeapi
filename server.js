const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

app.use(cors());

app.get('/api/getCustomers', (req, res) => {
    var resObj = [
        {'name': 'Phani', 'place': 'Bangalore'},
        {'name': 'Kiran', 'place': 'Kadapa'}];
    res.send(resObj);
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))