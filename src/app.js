const express = require('express')
const app = express()
const port = 5000;

const path = require('path');
const views_path = path.join(__dirname, '../views');
const static_path = path.join(__dirname, '../public');


app.set('view engine', 'ejs');
app.set('views', views_path);


app.use(express.static(static_path))


app.get('/', (req, res) => {
    res.render('index')
})


app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})