const Grade = require('../models/gradeModel');

// Get all grades
exports.getGrades = async (req, res) => {
  try {
    const grades = await Grade.find();
    res.status(200).json(grades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new grade
exports.createGrade = async (req, res) => {
  try {
    const grade = new Grade(req.body);
    await grade.save();
    res.status(201).json(grade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a grade
exports.updateGrade = async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!grade) return res.status(404).json({ message: 'Grade not found' });
    res.status(200).json(grade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a grade
exports.deleteGrade = async (req, res) => {
  try {
    const grade = await Grade.findByIdAndDelete(req.params.id);
    if (!grade) return res.status(404).json({ message: 'Grade not found' });
    res.status(200).json({ message: 'Grade deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
