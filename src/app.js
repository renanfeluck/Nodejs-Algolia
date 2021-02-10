const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');

require('./routes')(app);
const dir = path.join(__dirname, 'assets');
app.use('/upload', express.static(dir));

let hits = [];

async function exportData() {

    console.log("starting data export")

}

app.get('/', (req, res) => {

    res.send('developed by: Renan Felipe Luckow')

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
