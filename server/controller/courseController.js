const {Course} = require('../models/models')
const ApiError = require('../error/ApiError')

class CourseController {
    async create(req, res) {
        const {title, description} = req.body
        const course = await Course.create({title, description})
        return res.json(course)
    }
    async getAll(req, res) {

    }
    async getOne(req, res) {

    }

}

module.exports = new CourseController()