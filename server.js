const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var appRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/api', appRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))