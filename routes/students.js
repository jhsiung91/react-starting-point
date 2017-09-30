const app = require('express').Router();
const db = require('../db');
const { Student, Campus } = db.models;
module.exports = app;

// GET
// - all students
// - a student by id
app.use('/',(req,res,next)=>{
	Student.findAll()
	.then(students => res.send(students))
	.catch(next)
})

app.use('/:id',(req,res,next)=>{
	Student.findById(req.params.id)
	.then(student => res.send(student))
	.catch(next)
})

// app.get('/api/students',(req,res,next)=>{
// 	Student.findAll()
// 	.then(students => res.send(students))
// 	.catch(next)
// })
// app.get('/api/students/:id',(req,res,next)=>{
// 	Student.findById(req.params.id)
// 	.then(student => res.send(student))
// 	.catch(next)
// })


// POST
// - new student
app.post('/',(req,res,next)=>{
	Student.create(req.body)
	.then(student => res.send(student))
	.catch(next)
})

// PUT
// - updated student info for one student
app.put('/:id',(req,res,next)=>{
	Student.findById(req.params.id)
	// .then(student => {
	// 	Object.assign(student,req.body)
	// 	return student.save();
	// })
	// .then( ()=> res.sendStatus(204))
	// .catch(next)
	.then(student => student.update(req.body))
	.then(student => res.send(student))
	.catch(next)
})

// DELETE
// - a student
app.delete('/:id',(req,res,next)=>{
	Student.destroy({
		where: {id: req.params.id}
	})
	.then( ()=> res.sendStatus(204))
	.catch(next)
})


