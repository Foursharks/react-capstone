require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

//makes a new connection to DB using Sequelize class
//in this case connection is to external database, need to switch to a local database
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
    }
})

module.exports = {
    sequelize
}