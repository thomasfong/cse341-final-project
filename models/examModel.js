const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, // Duration in minutes
  location: { type: String, required: true },
  type: { type: String, enum: ['Midterm', 'Final', 'Quiz'], required: true },
});

module.exports = mongoose.model('Exam', examSchema);
