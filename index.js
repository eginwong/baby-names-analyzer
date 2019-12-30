const express = require('express');
const babyNamesData = require('./babyNamesData');

const app = express();
const port = 3000;

// read from json everytime to crunch data
// -> add cache

// use a data structure vs an array

// using a map vs. for loop
// using a while loop vs. for loop

/** call with /filter?prefix=a */
app.get('/filter', babyNamesData.filter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
