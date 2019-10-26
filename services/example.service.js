const repository = require("../repository/example.repository");

const paginate = (limit = 5, offset = 0) => {
  const queries = [repository.paginate(limit, offset), repository.total()];
  return Promise.all(queries).then(data => {
    console.log("resultado de queris: ", data);
    return {
      data: data[0],
      total: data[1],
      totalPages: Math.ceil(data[1] / limit)
    };
  });
};

const createExample = example => {
  // extra logic
  return repository.create(example);
};

const findExampleById = id => {
  //extra logic
  return repository.findById(id);
};

const removeExample = id => {
  //extra logic
  return repository.remove(id);
};

const updateExample = (id, data) => {
  //extra logic
  console.log("data: ", data);
  return repository.update(id, data);
};

module.exports = {
  createExample,
  removeExample,
  updateExample,
  findExampleById,
  paginate
};
