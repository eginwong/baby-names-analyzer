const fs = require('fs');

const data = (() => JSON.parse(fs.readFileSync('./dataset/baby_names.json').toString()).data)();

const columns = {
  FIRST_NAME: 11,
  COUNT: 12,
};

const filter = (req, res) => {
  const query = req.query.prefix;

  const filteredResults = data.filter((i) => i[columns.FIRST_NAME]
    .toString()
    .toLowerCase()
    .startsWith(query));

  const count = filteredResults.reduce(
    (j, currentVal) => currentVal + parseInt(j[columns.COUNT], 10), 0,
  );

  res.send({
    count,
    filteredResults,
  });
};

module.exports = {
  filter,
};
