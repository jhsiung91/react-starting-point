import React, {Component} from 'react';
import store, { fetchCampus } from '../store';
import {Link} from 'react-router-dom';

export default class SingleCampus extends Component {
	constructor(){
		super();
		this.state = store.getState();
	}
	render(){
    const {campus} = this.state;
    return (
      <div>
        <p>{singleCampus.name}</p>
        <ul>
          {
          	 <Link to={`/student/${student.id}`}>{student.name}</Link>
          }
        </ul>
      </div>
    )
	}
}