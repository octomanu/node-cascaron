const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const example = new Schema({
  title: {
    type: String,
    required: [true, "Title required"]
  },
  message: {
    type: String,
    required: [true, "Message required"]
  }
});

module.exports = mongoose.model("Example", example);
