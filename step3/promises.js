const request = require("request");
const proms = [];
proms.push(new Promise(function(resolve, reject) {
    request("http://localhost:8080", function(err, response, body) {
        if(err) {
            reject('Errored!!');
        }
        resolve(body);
    });
}));
proms.push(new Promise(function(resolve, reject) {
    request("http://localhost:8080", function(err, response, body) {
        if(err) {
            reject('Errored!!');
        }
        resolve(body);
    });
}));
proms.push(new Promise(function(resolve, reject) {
    request("http://localhost:8080", function(err, response, body) {
        if(err) {
            reject('Errored!!');
        }
        resolve(body);
    });
}));

const success = function(data) {
    console.log(data);
};
const failure = function(err) {console.log(err)}

Promise.all(proms).then(data => console.log(data))
console.log('Start task');