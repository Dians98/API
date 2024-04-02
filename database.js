/**
 * INITIALIZE DB CONNECTION
 */

const { MongoClient} = require ('mongodb');

let dbConnection;

let uri = "mongodb://localhost:27017/API_udemy_tuto";


/**
 * Creating 2 ùethods that we will export to our app.js file
 */
module.exports = {
    /**
     * this funtion takes a callback function as an argument
     */
    connectToDb: (callback) => {
        MongoClient .connect(uri)
                    .then((client) => {
                        dbConnection = client.db();
/**
 * Once the connection is succesfull, the callback given on argument is executed
 */
                        return callback();
                    })
                    .catch((err) => {
                        console.log(err);
                        return callback(err);
                    })
    },

    getDb: () => dbConnection
}