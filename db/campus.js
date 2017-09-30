const conn = require('./conn');

const Campus = conn.define('campus',{
	name: {
		type: conn.Sequelize.STRING,
		allowNull: false
	}
})

module.exports = Campus;