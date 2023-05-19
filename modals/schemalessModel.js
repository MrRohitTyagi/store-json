const mongoose = require("mongoose");

const universal = new mongoose.Schema({
  key: {
    type: String,
    require: [true, "Key is required"],
    unique: [true, "This Key already exists please try another"],
    maxLength: 10,
  },
  data: {
    type: Object,
  },
});

module.exports = mongoose.model("universal-storage", universal);
