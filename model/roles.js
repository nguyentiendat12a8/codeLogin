const mongoose = require("mongoose");

const roleScheme = new mongoose.Schema({
    name: String
  })


module.exports = mongoose.model('roles',roleScheme)
