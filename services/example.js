const repository = require("../repository/example");

const createExample = example => {
  // do some extra logic
  return repository.create(example);
};

module.exports = {
  createExample
};
