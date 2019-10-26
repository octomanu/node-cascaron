const { query } = require("express-validator");
const {
  responseValidationError
} = require("../middleware/route-validation-error");
const parseInteger = int => parseInt(int, 10);

const paginator = [
  query("limit")
    .optional()
    .isInt()
    .customSanitizer(parseInteger),
  query("offset")
    .optional()
    .isInt()
    .customSanitizer(parseInteger),
  responseValidationError
];

module.exports = {
  paginator
};
