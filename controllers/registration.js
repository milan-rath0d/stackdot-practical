const CompetitiveExam = require('../models/master/CompetitiveExam');
const Degree = require('../models/master/Degree');
const InstituteType = require('../models/master/instituteType');
const University = require('../models/master/University');
const Board = require('./../models/master/board');
const ClassCategory = require('./../models/master/classCategory');
const Medium = require('./../models/master/medium');
const Standard = require('./../models/master/standard');
const Registration = require('./../models/Registration')



exports.Registration = async (req, res) => {
    try {
        const {
            instituteTypeId,
            boardId,
            mediumId,
            classCategoryId,
            standardId,
            subjectIds,
            universityId,
            degreeTypeId,
            competitiveExamId
        } = req.body

        const instituteType = await InstituteType.findById(instituteTypeId);
        if (!instituteType) {
            return res.status(400).json({ message: 'Invalid institute type!' })

        }
        if (instituteType.name == 'School') {
            if (!boardId || !mediumId || !classCategoryId || !standardId || !subjectIds) {
                return res.status(400).json({ message: 'Missing fields for school registration' })
            }
            const board = await Board.findById(boardId);
            const medium = await Medium.findById(mediumId);
            const classCategory = await ClassCategory.findById(classCategoryId);
            const standard = await Standard.findById(standardId);

            if (!board || !medium || !classCategory || !standard) {
                return res.status(400).json({ message: 'invalid board, medium, class category or standard!' })
            }
        } else if (instituteType.name === 'College') {
            if (!universityId || !degreeTypeId) {
                return res.status(400).json({ message: 'Missing fields for college registration' })
            }

            const university = await University.findById(universityId);
            const degreeType = await Degree.findById(degreeTypeId);

            if (!university || !degreeType) {
                return res.status(400).json({ message: 'Invalid University or Degree type!' })
            }

        } else if (instituteType.name === 'Competitive Exam Center') {
            if (!competitiveExamId) {
                return res.status(400).json({ message: 'Missing fields for competitive exam registration' })
            }

            const competitiveExam = await CompetitiveExam.findById(competitiveExamId);

            if (!competitiveExam) {
                return res.status(400).json({ message: 'Invalid competitive exam!' })
            }
        }

        const registration = new Registration({
            instituteTypeId,
            boardId,
            mediumId,
            standardId,
            classCategoryId,
            subjectIds,
            universityId,
            degreeTypeId,
            competitiveExamId,
        })

        await registration.save();

        res.status(201).json({
            message: "Institute registared successfully!",
            data: registration
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error registering institute!",
            error: error.message
        })
    }
}

