const exampleModel = require("../model/example");

const create = data => {
  // maybe a complex obejct - find - add relations etc...

  const example = new exampleModel({
    title: data.title,
    message: data.message
  });
  return example.save();
};

module.exports = {
  create
};
