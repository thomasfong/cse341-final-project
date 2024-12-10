const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  schedule: { type: String, required: true },
  instructor: { type: String, required: true },
});

module.exports = mongoose.model('Class', classSchema);
