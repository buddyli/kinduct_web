import React from 'react';
import { Link } from 'react-router-dom';
import { host_name, context_root } from './global.js';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', age: '', location: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
	  const state = this.state
	  state[event.target.name] = event.target.value
	  this.setState(state);
  }
  handleSubmit(event) {
      event.preventDefault();
	  fetch(`${host_name}${context_root}athletesrestcontroller/add_athlete`, {
			method: 'POST',
			body: JSON.stringify({
                name: this.state.name,
                age: this.state.age,
                location: this.state.location
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				if(response.status === 200) {
					alert("New athlete saved successfully");
				}
			});
  }
  render() {
    return (
		<div id="container">
		  <Link to="/">Athletes</Link>
			  <p/>
			  <form onSubmit={this.handleSubmit}>
				<p>
					<label>name:</label>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" />
				</p>
				<p>
					<label>age:</label>
					<input type="text" name="age" value={this.state.age} onChange={this.handleChange} placeholder="age" />
				</p>
                <p>
					<label>location:</label>
					<input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="location" />
				</p>
				<p>
					<input type="submit" value="Submit" />
				</p>
			  </form>
		   </div>
    );
  }
}

export default Create;