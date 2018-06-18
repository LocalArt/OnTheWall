import React from "react";
import { Link } from "react-router-dom";
import "./Upload.css";
import "../Firebase/Firebase";
import axios from 'axios';

class Upload extends React.Component {
    state = {
      selectedFile: null
    }
  
    // event listener for choosing the file
    fileSelectedHandler = event => {
      this.setState({
        selectedFile: event.target.files[0]
      })
    }
  
    //event listenener for file upload
    fileUploadHandler = () => {
        // Default Javascript Object
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('', fd) 
            // outputs any response
            .then(res => {
            console.log(res);
        })
            //catches an error
            .catch(err => {
            console.log(`${err}`)
        });
    }
  
    render() {
        return (
          <div className="Image">
            <input type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
            {/*<button onClick={() => this.fileInput.click()}>Pick File</button>*/}
            <button onClick={this.fileUploadHandler}>Upload</button>
          </div>
        );
    }
 }

export default Upload;