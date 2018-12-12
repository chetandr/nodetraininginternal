const MongoClient = require("mongodb");
const url = "mongodb://localhost:27017"

const getUsers = new Promise((resolve, reject) => {
    MongoClient.connect(url, async (err, dbo) => {
        if(err) {
            reject("db Error")
        }
        const con = dbo.db("users");
        const data = await con.collection("user").findOne();
        //return data;
        resolve(data);
        dbo.close();

    })
    console.log('Hello');
});

function createUsers(user) {
    MongoClient.connect(url, (err, dbo) => {
        const con = dbo.db("users");
        return con.collection("user").insert(obj);
    })
};

module.exports = {
    getUsers,
    createUsers
}