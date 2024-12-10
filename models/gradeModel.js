const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  letter: { type: String, required: true },
  range: { type: String, required: true },
});

module.exports = mongoose.model('Grade', gradeSchema);
