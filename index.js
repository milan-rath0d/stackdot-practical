const express = require("express");
const mongoose = require("mongoose");


const registrationRoute = require('./routes/registration')
const instituteTypeRoutes = require('./routes/instituteType')

const boardsRoutes = require('./routes/board')

const mediumRoutes = require('./routes/medium')

const standardRoutes = require('./routes/standard')

const classCategoryRoutes = require('./routes/classcategory')

const subjectRoutes = require('./routes/subject')

const examRoutes = require('./routes/CompetitiveExam')

const universityRoutes = require('./routes/university')
const degreeRoutes = require('./routes/degree')





const app = express();

// Middleware
app.use(express.json());

app.use('/api', registrationRoute);
app.use('/api/master/institute-type', instituteTypeRoutes);
app.use('/api/master/boards', boardsRoutes);
app.use('/api/master/medium', mediumRoutes);
app.use('/api/master/class-category', classCategoryRoutes);
app.use('/api/master/standard', standardRoutes);
app.use('/api/master/subject', subjectRoutes);

app.use('/api/master/degree', degreeRoutes);
app.use('/api/master/university', universityRoutes);
app.use('/api/master/competitive-exam', examRoutes);





// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/stackdot-practical')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
