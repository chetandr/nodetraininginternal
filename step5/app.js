const express = require('express');
const app = express();
const userRoutes = require('./userData/route');

app.use(express.static('./public'));
app.use(express.static('./img'));
app.get('/', function(req, res) {res.send("Hello World")});
app.use('/users', userRoutes);

// app.get('/users', function(req,res) { res.send("User Data will be shown here")});

app.listen('8080', function(){ console.log("Listening on http://localhost:8080")} );