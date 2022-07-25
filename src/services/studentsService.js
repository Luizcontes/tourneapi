const StudentRepository = require('../databases/repositories/studentsRepo')

class StudentService {

    constructor() {
        this.repository = new StudentRepository()
    }

    async getAllStudents() {
        return this.repository.findAll()
    }
}

module.exports = StudentService