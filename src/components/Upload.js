import React from 'react'
import { appconfig } from './my-aws-config'
import { Storage } from 'aws-amplify';
import { Form } from 'react-bootstrap';

window.LOG_LEVEL = 'DEBUG';

// Uploads file to S3
class Upload extends React.Component {

    constructor(props) {
      super(props);
      this.onFileSelect = this.onFileSelect.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        imageName: null
      };
    }

    onFileSelect(event) {
      this.setState({
        imageName: this.upload.files[0].name,
      })
    }
  
    handleSubmit(event) {
      event.preventDefault();

      console.log('## handle submit. imageName:' + this.upload.files[0].name
        + "imageFile:" + this.upload.files[0]
        + ", imageType; " + this.upload.files[0].type );
      
      Storage.put(`${this.upload.files[0].name}`,
        this.upload.files[0], 
        { level: 'private', 
          contentType: this.upload.files[0].type })
      .then(result => {
        this.upload = null;
          this.setState({ response: "Success uploading file!" });
      })
      .catch(err => {
        this.setState({ response: `Error while uploading file: ${err}` });
      });
    }


    render() {
      return (
      <div className="p-5 form-group">
        <h1>Upload</h1>
        <p>S3 Bucket: {appconfig.upload_bucket_name}</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupUpload">
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>File input</Form.File.Label>
              <Form.File.Input ref={ref => (this.upload = ref)} onChange={this.onFileSelect}/>
            </Form.File>
            <button type="submit" className="btn btn-primary">Upload</button>
          </Form.Group>

        </Form>
      </div>
      );
    }
}

export default Upload