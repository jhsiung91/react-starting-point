const app = require('express').Router();
const db = require('../db');
const { Student, Campus } = db.models;
module.exports = app;

// GET
// - all campuses
// - a campus by id
app.get('/',(req,res,next)=>{
	Campus.findAll()
	.then(campuses => res.send(campuses))
	.catch(next)
});

app.get('/:id',(req,res,next)=>{
	Campus.findById(req.params.id)
	.then(campus => res.send(campus))
	.catch(next)
})

// POST
// - new campus
app.post('/',(req,res,next)=>{
	Campus.create(req.body)
	.then(campus => res.send(campus))
	.catch(next)
})

// PUT
// - updated campus info for one campus
app.put('/:id',(req,res,next)=>{
	Campus.findById(req.params.id)
	.then(campus => {
		campus.update(req.body)
		// Object.assign(campus,req.body)
		// return campus.save().then(student => {
		// Object.assign(student,req.body)
		// return student.save();
		})
	.then(campus => res.send(campus))
	.catch(next)
})


// DELETE
// - a campus
app.delete('/:id',(req,res,next)=>{
	Campus.findById(req.params.id)
	.then(campus => campus.destroy(req.body))
	.then(campus => res.send(campus))
	.catch(next)
});