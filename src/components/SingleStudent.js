import React, {Component} from 'react';
import store, { fetchStudent } from '../store';
import {Link} from 'react-router-dom';

export default class SingleStudent extends Component {
	constructor(){
		super();
		this.state = store.getState();
	}
	render(){
    const {student} = this.state;
    return (
      <div>
        <p>{singleStudent.name}</p>
        <ul>
          {
          	<Link to={`/campus/${campus.id}`}>{campus.name}</Link>
          }
        </ul>
      </div>
    )
	}
}