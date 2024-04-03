/**
 * TO BUILD OUR API WE NEED TO IMPORT THE EXPRESS LIBRAIRIES
 */

const express = require('express');

const { connectToDb, getDb } = require('./database');


/**
 * Initialize the app
 */
const app = express();

/**
 * Set up middleware
 */



/**
 * Parse incoming JSON
 */
app.use(express.json());

let db ;

connectToDb((err) => {
    if(!err){
        app.listen(3001, () => {
            console.log('Server started succesfully');
        });
        db = getDb();
    }else{
        console.log(err);
    }
    
});

/**
 * Creating Restful API endpoint
 */


app.get('/api/students', (req, res) => {
    /**
     * If the pageNumber is not provided, start automatically with pageNumber 0
     */
const page = req.query.pageNumber || 0;

/**
 * We have to limit the number of students per page
 */

const studentsPerPage = 10;

let arrayOfStudents = [];

db.collection('students')
    .find()
    .sort({id : 1}) //ascending
    .skip(page * studentsPerPage)//in order to skip the result based on page number
    .limit(studentsPerPage)
    .forEach(student => arrayOfStudents.push(student))
    .then(() => {
        res.status(200).json(arrayOfStudents);
    })
    .catch()(() => {
        res.status(500).json({msg : "Error getting students"});
    })

});

