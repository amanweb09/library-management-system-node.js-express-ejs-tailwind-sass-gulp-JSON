const express = require('express')
const app = express()
const port = 5000;
const axios = require('axios');

const path = require('path');
const views_path = path.join(__dirname, '../views');
const static_path = path.join(__dirname, '../public');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');
app.set('views', views_path);

app.use(express.static(static_path));

const fetchBookController = require('./controllers/fetchBookController');
const createBookController = require('./controllers/createBookController');

app.get('/', (req, res) => {
    res.render('index', {
        axios
    })
})

app.post('/get-book', fetchBookController().fetchBook);
app.post('/create-book', createBookController().create);

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})