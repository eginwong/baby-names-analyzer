const express = require('express');
const babyNamesData = require('./babyNamesData-cache-map');

const app = express();
const port = 3000;

/** call with /filter?prefix=a */
app.get('/filter', babyNamesData.filter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
