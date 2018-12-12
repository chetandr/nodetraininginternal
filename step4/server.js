const express = require("express");
const app = new express();
const userRoutes = require('./crud/routes');
app.use(express.static('./public'));

app.get('/', (request, response) => response.send("<h1>Home</h1>"))

app.use('/user', userRoutes);

app.get('/hello', (request, response) => response.send("<h1>Hello World</h1>"))

app.listen(8080,() => console.log("listening on http://localhost:8080"))