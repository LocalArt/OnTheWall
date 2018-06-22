import React from "react";
import { Link } from "react-router-dom";
// import * as firebase from 'firebase';
import "./Upload.css";
import { storage, database } from "../Firebase/Firebase";
import axios from 'axios';

class Upload extends React.Component {
  state = {
    selectedFile: null,
    url: ''
  }

  uploadProgress = (snapshot) => {
    // TODO
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    };
  }

  uploadError = (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object\
        console.log('User do not have permission');
        break;

      case 'storage/canceled':
        // User canceled the upload
        console.log('User canceled the upload');
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        console.log('Unknown error occurred, inspect error.serverResponse');
        break;
    }
  };

  // event listener for choosing the file
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  //event listenener for file upload
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('artist', this.state.selectedFile, this.state.selectedFile.name);

    const file = this.state.selectedFile; // file name
    const metadata = {
      contentType: 'image/jpeg',
      //id: 'some unique id'
    };

    // .ref(/artists/ + 'categories' + 'accimeesterlin');
    const storageRef = storage().ref('artists/' + 'categories'); // ISSUE
    const uploadTask = storageRef.child(file.name).put(file, metadata);
    uploadTask.on(storage.TaskEvent.STATE_CHANGED, this.uploadProgress, this.uploadError, function (snapshot) {
      console.log(uploadTask.snapshot);
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
      });
    });

  }

  render() {
    console.log('State: ', this.state);
    return (
      <div className="Image">
        <input type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} />
        {/*<button onClick={() => this.fileInput.click()}>Pick File</button>*/}
        <button onClick={this.fileUploadHandler}>Upload</button>
       
        <img src={this.state.url} alt="" />
      </div>
    );
  };

  componentDidMount = async function () {
    const imagePath="";
    const { setState } = this;
    var storageRef = storage().ref('');
    const data = await storageRef.child('').getDownloadURL();
    this.setState({ url: data });
  };

}

export default Upload;
