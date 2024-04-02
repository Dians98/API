/**
 * TO BUILD OUR API WE NEED TO IMPORT THE EXPRESS LIBRAIRIES
 */

const express = require('express');

const app = express();

app.listen(3001, () => {
    console.log('Server started succesfully');
})