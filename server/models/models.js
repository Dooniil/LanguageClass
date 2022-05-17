const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    nickname: { type: DataTypes.STRING }
})

const Role = sequelize.define('role', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING }
})

const Course = sequelize.define('course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
})

const User_course = sequelize.define('user_course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_user: { type: DataTypes.INTEGER },
    id_course: { type: DataTypes.INTEGER }
})

const Exercise = sequelize.define('exercise', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.INTEGER },
    time_start: { type: DataTypes.TIME },
    time_end: { type: DataTypes.TIME }
})

const Exercise_user = sequelize.define('exercise_user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mark: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.STRING }
})

const Type_exercise = sequelize.define('type_exercise', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING }
})

const Exercise_course = sequelize.define('exercise_course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING }
})

Role.hasOne(User)
User.belongsTo(Role)

Type_exercise.hasOne(Exercise)
Exercise.belongsTo(Type_exercise)

User.hasMany(User_course)
Course.hasMany(User_course)
User_course.belongsTo(User)
User_course.belongsTo(Course)

Exercise.hasMany(Exercise_course)
Course.hasMany(Exercise_course)
Exercise_course.belongsTo(Exercise)
Exercise_course.belongsTo(Course)

User.hasMany(Exercise_user)
Exercise.hasMany(Exercise_user)
Exercise_user.belongsTo(User)
Exercise_user.belongsTo(Exercise)

module.exports = {
    User,
    Role,
    Exercise_course,
    User_course,
    Exercise,
    Course,
    Type_exercise,
    Exercise_user
}