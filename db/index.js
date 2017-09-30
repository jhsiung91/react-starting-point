const conn = require('./conn');

const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus);
Campus.hasMany(Student);

const sync = ()=>{
	return conn.sync({ force: true})
}

const seed = ()=>{
	return Promise.all([
		Student.create({name:'jerry'}),
		Student.create({name:'anthony'}),
		Campus.create({name:'fullstack'}),
		Campus.create({name:'floor 25'})
	])
}

module.exports = {
	sync,
	seed,
	models: {
		Student,
		Campus
	}
}