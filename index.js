const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 8080;
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
    algo
});

app.get('/companies', db.getCompanies);
app.post('/companies', db.createCompanies);
app.post('/company', db.createCompany);
app.get('/company/:id', db.getCompany);

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
});





