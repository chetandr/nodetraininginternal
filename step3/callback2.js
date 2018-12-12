const request = require("request");
request("http://localhost:8080", function processRequest(err, response, body){
    console.log(err);
    console.log(response.body);
    console.log(body);
});

