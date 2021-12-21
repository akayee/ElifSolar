import React from 'react';
import { Link } from 'react-router-dom';
import { addData } from '../firebase/auth';
import firebase from "../firebase/firebase";

import '../assets/tailwind.css';

import { Col, Row, Button } from 'reactstrap';
import FileUploader from "react-firebase-file-uploader";


const data = {
  Preview_Image: "https://via.placeholder.com/625x800",
  image_gallery: [
    "https://via.placeholder.com/625x800",
    "https://via.placeholder.com/625x800",
    "https://via.placeholder.com/625x800",
    "https://via.placeholder.com/625x800",
    "https://via.placeholder.com/625x800"
  ]
}
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      age: '',
      user: [],
      data: {},
      filenames: [],
      downloadURLs: [],
      isUploading: false,
      uploadProgress: 0
    }
    this.onDrop = this.onDrop.bind(this);
  }
  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });


  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("products")
      .child(filename)
      .getDownloadURL();
    data.Preview_Image = { downloadURL };
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };
  //function for upload image
  onDrop(picture, file) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });

  }


  //function for change variation type
  handleChange = (event) => {
    this.setState({ data: { ...this.state.data, [event.target.name]: event.target.value } });
  };

  submitData = () => {
    let data = this.state.data;
    data.image = this.state.downloadURLs[0];
    data.image_gallery = this.state.downloadURLs;
    this.setState({ data: {}, downloadURLs: [] })
    addData(data, "products").then(alert("Product added"))

  }

  render() {
    return <div className="iron-product-add-wrap pt-50 px-sm-50 px-md-0">
      <Col container spacing={3} className="my-0">
        <Col item xs={12} sm={12} md={12} lg={12} className="py-0 mx-auto">
          <Col container spacing={32} className="my-0">
            <Row item xs={12} sm={12} md={12} lg={12} className="py-0 mb-md-0 mb-30">
              <Row container spacing={2} className="iron-product-gallery my-0">


                {data.image_gallery && data.image_gallery.map((gallery, index) => {
                  return (
                    <Col item xs={2} sm={3} md={2} lg={2} className="py-0">
                      <div className="image-upload">
                        <a href="javascript:void(0)">
                          <img
                            src={gallery}
                            alt="product-item"
                            height="50"
                          />
                        </a>

                        <div className="image-content d-flex justify-content-center align-items-center">
                          <FileUploader
                            withPreview
                            accept="image/*"
                            name="image-uploader-multiple"
                            randomizeFilename
                            storageRef={firebase.storage().ref("products")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                          />


                        </div>
                      </div>

                    </Col>
                  )
                })}


                <Col item xs={6} sm={6} md={6} lg={6} className="py-0">
                  <div className="preview-full-image">
                    <div className="iron-shadow product-gallery-item ">
                      <div>

                        <img
                          src={data.Preview_Image.downloadURL}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row item xs={12} sm={12} md={12} lg={12} className="py-0">
              <div className="detail-content">
                <div className="mb-sm-50 mb-20 detail-btns pl-25">
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      Açıklama
                    </label>
                    <div class="mt-1">
                      <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
                  </div>
                  <button
                    className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                    onClick={e => (this.submitData())}
                  >
                    create
                  </button>
                  <button
                    to={"/product-add"}
                    component={Link}
                    className="button btn-base btn-lg mb-20 mb-sm-0"
                    onClick={() => { this.setState({ data: {} }) }}
                  >
                    discard
                  </button>
                </div>
              </div>
            </Row>
          </Col>
        </Col>
      </Col>
    </div >
  }


}

export default Admin;