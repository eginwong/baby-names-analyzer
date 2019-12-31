/** INSTRUCTIONS:
 * Use this file as a starter to make your performance changes.
 * Before you begin, remember to take a baseline at this point in the implementation.
 *
 * Good luck!
 */

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
