import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
	constructor() {
		super();
		this.state = store.getState();
	}

	render() {
		const {campus, campuses} = this.state;
		return (
			<div>
				<ul>
				{
					campuses.map(campus => {
						return (
							<li key={campus.id}>
								<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
}