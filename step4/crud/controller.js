const MongoClient = require('mongodb');
const url = "mongodb://localhost:27017";
const database = "users";

module.exports = {
    getUserData : new Promise((resolve, reject) => {
        MongoClient.connect(url,
            (err, db) => {
                if(err) {
                    reject("DB Error" + err.message);
                }
                const dbo = db.db(database);
                dbo.collection("user").find({}).toArray(
                    (err, result) => {
                        db.close();
                        console.log(result);
                        resolve(result);
                    }
                )
            }
        )
        return "Raced ahead";
    })
}