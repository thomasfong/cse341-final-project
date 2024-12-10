const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const classRoutes = require('./routes/classRoutes');
const examRoutes = require('./routes/examRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
require('dotenv').config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/grades', gradeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));
