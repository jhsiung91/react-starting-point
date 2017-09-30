const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:5432/school');

module.exports = conn;