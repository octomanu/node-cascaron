const exampleModel = require("../model/example.model");

const paginate = (limit, offset) => {
  return exampleModel
    .find()
    .skip(offset)
    .limit(limit);
};

const total = () => {
  // use with criteria!
  return exampleModel.countDocuments();
};

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

const update = (id, data) => {
  return exampleModel.findOneAndUpdate({ _id: id }, data);
};

module.exports = {
  create,
  remove,
  update,
  findById,
  paginate,
  total
};
