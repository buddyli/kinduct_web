import React from 'react';
import { Link } from 'react-router-dom';
import { host_name, context_root } from './global.js';

class Athletes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {athletes: []};
		this.headers = [
			{ key: 'name', label: 'NAME'},
			{ key: 'age', label: 'AGE' },
			{ key: 'location', label: 'LOCATION' }
		];
		this.deleteathlete = this.deleteathlete.bind(this);
	}
	
	componentDidMount() {
		fetch(`${host_name}${context_root}athletesrestcontroller/athletes`)
		.then(response => {
			return response.json();
		}).then(result => {
			console.log(result);
			this.setState({
				athletes: result
			});
		});
	}
	
	deleteathlete(id) {
		if(window.confirm("Are you sure want to delete?")) {
			fetch(`${host_name}${context_root}athletesrestcontroller/delete_athlete/` + id, {
					method : 'DELETE'
				}).then(response => { 
					console.log(response);
					alert("athlete deleted successfully");
					fetch(`${host_name}${context_root}athletesrestcontroller/athletes`)
					.then(response => {
						return response.json();
					}).then(result => {
						console.log(result);
						this.setState({
							athletes: result
						});
					});
			 });
		}
	}
	
	render() {
		return (
			<div id="container">
				<h1>Athletes</h1>
				<p/>
				<table className="list_tbl">
					<thead>
						<tr>
						{
							this.headers.map(function(h) {
								return (
									<th key = {h.key}>{h.label}</th>
								)
							})
						}
						  <th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.athletes.map(function(item, key) {
							return (
								<tr key = {key}>
								  <td>{item.name}</td>
								  <td>{item.age}</td>
								  <td>{item.city},{item.province},{item.country}</td>
								  <td>
										<Link to={`/update/${item.id}`}>VIEW</Link>
										 &nbsp;&nbsp;&nbsp;&nbsp;
										<a href="" onClick={this.deleteathlete.bind(this, item.id)}>DELETE</a>
								  </td>
								</tr>
								)
							}.bind(this))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Athletes;