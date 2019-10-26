const { body } = require("express-validator");
const {
  responseValidationError
} = require("../middleware/route-validation-error");
const create = [
  body("title")
    .not()
    .isEmpty()
    .trim()
    .isString(),
  body("message")
    .not()
    .isEmpty()
    .isString(),
  responseValidationError
];
const update = () => {};

module.exports = {
  create,
  update
};
