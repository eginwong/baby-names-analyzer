const fs = require('fs');

const retrieveJSONData = () => {
  const jsonObj = JSON.parse(
    fs.readFileSync('./dataset/baby_names.json').toString(),
  );
  return jsonObj.data;
};

const columns = {
  FIRST_NAME: 11,
  COUNT: 12,
};

const filter = (req, res) => {
  const query = req.query.prefix;
  const data = retrieveJSONData();

  const filteredResults = [];
  for (let i = 0; i < data.length; i += 1) {
    if (
      data[i][columns.FIRST_NAME]
        .toString()
        .toLowerCase()
        .startsWith(query)
    ) {
      filteredResults.push(data[i]);
    }
  }

  let count = 0;
  for (let j = 0; j < filteredResults.length; j += 1) {
    count += parseInt(filteredResults[j][columns.COUNT], 10);
  }

  res.send({
    count,
    filteredResults,
  });
};

module.exports = {
  filter,
};
