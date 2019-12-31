const fs = require('fs');
const lodash = require('lodash');
const trieDataStructure = require('./data-structure/trie');

const columns = {
  FIRST_NAME: 11,
  COUNT: 12,
};

const trie = new trieDataStructure.Trie();
// populate trie
(() => {
  const { data } = JSON.parse(fs.readFileSync('./dataset/baby_names.json').toString());
  data.forEach((elt) => {
    // requires special logic to handle duplicates in source data
    const wordNode = trie.contains(elt[columns.FIRST_NAME].toUpperCase());
    let existingCount = 0;
    if (wordNode) {
      existingCount = wordNode.record[columns.COUNT];
    }
    const modifiedRecord = lodash.cloneDeep(elt);
    modifiedRecord[columns.COUNT] = parseInt(elt[columns.COUNT], 10) + existingCount;
    trie.insert(elt[columns.FIRST_NAME].toUpperCase(), modifiedRecord);
  });
})();

const filter = (req, res) => {
  const query = req.query.prefix;

  const results = trie.find(query.toUpperCase());

  res.send({
    count: results.map((x) => x.count).reduce((acc, curr) => acc + curr, 0),
    results,
  });
};

module.exports = {
  filter,
};
