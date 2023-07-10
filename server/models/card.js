const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    Card : sequelize.define('card', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        question: DataTypes.STRING,
        answer: DataTypes.STRING
    })
}
