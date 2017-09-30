import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Students extends Component {
	constructor() {
	  super();
	  this.state = store.getState();
	}
	render() {
    const {students, student} = this.state;
    return (
      <div>
        <h1>Students</h1>
				{
					students.map(student => {
						<div>
							<Link to={`/student/${student.id}`}>{student.name} </Link>
							<Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
						</div>
					})
				}
      </div>
    );
  }
}