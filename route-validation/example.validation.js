const { body, oneOf } = require("express-validator");
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
    .trim()
    .isString(),
  responseValidationError
];

const update = [
  oneOf([
    body("title")
      .not()
      .isEmpty().withMessage("cannot be null")
      .isString().withMessage("must be a string"),
    body("message")
      .not()
      .isEmpty().withMessage("cannot be null")
      .isString().withMessage("must be a string")
  ]),
  responseValidationError
];

module.exports = {
  create,
  update
};
