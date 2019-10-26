const repository = require("../repository/example.repository");

const createExample = example => {
  // logica extra
  return repository.create(example);
};

const findById = id => {
  //extyra logic
  return repository.findById(id);
};

// logica extra.
const remove = id => {
  //extra logic
  return repository.remove(id);
};

module.exports = {
  createExample,
  remove,
  findById
};
