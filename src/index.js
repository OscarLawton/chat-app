const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, '/public/views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
    console.log(process.env.PORT)
});

app.listen(port, ()=>{
    console.log(`It's alive!!!!! On port `, port)
});