const mongoose = require("mongoose");

const urlScheme = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
  urlHash: {
    type: String,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const URL = mongoose.model("URL", urlScheme);

module.exports = URL;
