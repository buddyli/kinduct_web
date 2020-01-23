import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '', age: 0, city: '', province: '', country: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
	fetch('http://localhost/kinduct/index.php/athletesrestcontroller/athlete?id=' + this.props.match.params.id)
		.then(response => {
			return response.json();
		}).then(result => {
			console.log(result);
			this.setState({
				id: result.id,
				name: result.name,
                age: result.age,
                city: result.city,
                province: result.province,
                country: result.country
			});
		});
  }

  handleChange(event) {
	  const state = this.state
	  state[event.target.name] = event.target.value
	  this.setState(state);
  }

  handleSubmit(event) {
	  event.preventDefault();
	  fetch('http://localhost/kinduct/index.php/athletesrestcontroller/update_athlete', {
			method: 'PUT',
			body: JSON.stringify({
							id: this.state.id,
							name: this.state.name,
                            age: this.state.age,
                            city: this.state.city,
                            province: this.state.province,
                            country: this.state.country
			}),
			headers: {
					"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
                return ;
			});
  }

  deleteathlete(id) {
    if(window.confirm("Are you sure want to delete?")) {
        fetch('http://localhost/kinduct/index.php/athletesrestcontroller/delete_athlete/' + id, {
                method : 'DELETE'
            }).then(response => {
                console.log(response);
                // alert("athlete deleted successfully");
                this.props.history.push('/')
         });
    }
}
  
  render() {
    return (
			<div id="container">
			    <h1>{this.state.name} </h1>
                <p/>
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="id" value={this.state.id}/>
                    <table className="detail_tbl">
                        <tbody>
                            <tr>
                                <th>AGE:</th>
                                <td>{this.state.age}</td>
                            </tr>
                            <tr>
                                <th>CITY:</th>
                                <td>{this.state.city}</td>
                            </tr>
                            <tr>
                                <th>PROVINCE:</th>
                                <td>{this.state.province}</td>
                            </tr>
                            <tr>
                                <th>COUNTRY:</th>
                                <td>{this.state.country}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        <input type="button" onClick={this.deleteathlete.bind(this, this.state.id)} value="Delete" className="sub_btn"/>
                    </p>
                </form>
			    </div>
    );
  }
}

export default Update;