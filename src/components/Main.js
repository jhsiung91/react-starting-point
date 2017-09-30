import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

export default function Main () {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/home' component={Home}/>
				<Route path='/students' component={Students}/>
				<Route path='/campuses/:campusId' component={SingleCampus}/>
				<Route path='/students/:studentId' component={SingleStudent}/>
			</Switch>
		</div>
	)
}