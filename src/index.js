const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable if available, or default to port 3000
const path = require('path');
const hbs = require('hbs');


const staticPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templetes/partials');
const viewsPath = path.join(__dirname, '../templetes/views');


// set static path----------------------------------------------
app.use(express.static(staticPath));

// set view ingin _________________________________________________

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// set hbs rout________________________________________________________


app.get('/', (req, res) => {
    res.render("index.hbs");
});

app.get('/about', (req, res) => {
    res.render("about.hbs");
});


app.get('/images', (req, res) => {
    res.render("images.hbs");
});


app.get('/tips', (req, res) => {
    res.render("tips.hbs");
});

app.get('/vedios', (req, res) => {
    res.render("vedios.hbs");
});
app.get('/vedios', (req, res) => {
    res.render("electrical.hbs");
});


app.get('/', (req, res) => {
    res.send('Hello, World! This is your Express server.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
