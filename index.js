const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

// read from json everytime to crunch data
// -> add cache

// use a data structure vs an array

// using a map vs. for loop
// using a while loop vs. for loop

app.get("/", (req, res) => {
  const babyNamesData = retrieveJSONData();
  res.send(babyNamesData);
});

/**
 * call with /filter?prefix=a
 */
app.get("/filter", (req, res) => {
  const query = req.query.prefix;
  const babyNamesData = retrieveJSONData();

  const filteredResults = [];
  for (let i = 0; i < babyNamesData.length; i++) {
    if (
      babyNamesData[i][11]
        .toString()
        .toLowerCase()
        .startsWith(query)
    ) {
      filteredResults.push(babyNamesData[i]);
    }
  }
  res.send(filteredResults);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function retrieveJSONData() {
  const jsonObj = JSON.parse(
    fs.readFileSync("./dataset/baby_names.json").toString()
  );
  return jsonObj.data;
}
