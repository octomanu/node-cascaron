const exampleModel = require("../model/example.model");

const create = data => {
  // logica extra relacionada a la DB. buscar relaciones - etc...

  const example = new exampleModel({
    title: data.title,
    message: data.message
  });
  return example.save();
};

const findById = id => {
  return exampleModel.findById(id);
};

const remove = id => {
  return exampleModel.findByIdAndDelete(id);
};

module.exports = {
  create,
  remove,
  findById
};
