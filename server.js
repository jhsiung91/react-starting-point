const express = require('express');
const app = express();
const path = require('path');
const db = require('./db')
const { Student, Campus } = db.models

app.use('/dist', express.static(path.join(__dirname, 'dist')));

// app.use('students', require('./routes/students'));
// app.use('campuses', require('./routes/campuses'));
app.use('/api', require('./api'))

app.get('*', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

db.sync()
	.then(db.seed)
	.then( ()=> {
		app.listen(process.env.PORT || 3000);
	})


app.use((err,req,res,next)=>{
	res.status(err.status || 500).send(err)
})



