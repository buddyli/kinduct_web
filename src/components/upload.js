import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fileToUpload: '', msg: ''};
    // this.state = {id: '', title: '', url: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

    onFileChange = (event) => {
        this.setState({
            fileToUpload: event.target.files[0]
        });
    }

    uploadFileData = (event) => {
		event.preventDefault();
		this.setState({msg: ''});

		let data = new FormData();
		data.append('fileToUpload', this.state.fileToUpload);

		fetch('http://localhost/kinduct/index.php/athletesrestcontroller/upload_athlete', {
			method: 'POST',
			body: data
		}).then(response => {
            console.log(response);
            this.props.history.push('/');
		}).catch(err => {
			this.setState({error: err});
		});

	}

    render() {
        return(
            <form action="http://localhost/kinduct/upload" method="post" encType="multipart/form-data">
                <div id="container">
                    <h1>Upload a File</h1>
                    <h4>{this.state.msg}</h4>
                    {/* <input onChange={this.onFileChange} type="file" name="fileToUpload"></input> */}
                    <div className="file-upload">
                        <div className="file-select">
                            <div className="file-select-button" id="fileName">Browse</div>
                            <div className="file-select-name" id="noFile">{this.state.fileToUpload['name']}</div> 
                            <input type="file" name="fileToUpload" id="fileToUpload" onChange={this.onFileChange}></input>
                        </div>
                    </div>
                    <p/>
                    {/* <input type="submit" value="Upload" name="submit" className="upload_btn" disabled={!this.state.fileToUpload}></input> */}
                    <button disabled={!this.state.fileToUpload} onClick={this.uploadFileData} className="upload_btn">Upload</button>
                </div>
            </form>
        );
    }
}

export default Upload;