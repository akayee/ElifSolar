import React from 'react';
import {
    Link, BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { addData } from '../firebase/auth';
import firebase from "../firebase/firebase";

import '../assets/tailwind.css';

import { Col, Row, Button } from 'reactstrap';
import FileUploader from "react-firebase-file-uploader";

import styles from '../assets/mystyle.module.css';

const data = {
    Preview_Image: "https://via.placeholder.com/625x800",
    image_gallery: [
        "https://via.placeholder.com/625x800"
    ]
}
class CreatePorject extends React.Component {
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
            uploadProgress: 0,
            logged: true
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
            .ref("projects")
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
        addData(data, "projects").then(alert("Proje eklendi"))

    }

    render() {
        return <div className="iron-product-add-wrap pt-50 px-sm-50 px-md-0">
            <div className="my-0 d-flex justify-content-center align-items-center">

                <h2><b>Proje Oluştur</b></h2>
            </div>
            <Link  to="/admin"> <div className={styles.bigbluelink}>Anlık Aktivite Oluştur</div></Link>
            {this.state.logged ? null : <Redirect to="/" />}
            <Col container spacing={3} className="my-0 d-flex justify-content-center align-items-center">

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
                                                        alt="action-item"
                                                        height="50"
                                                    />
                                                </a>

                                                <div className="image-content d-flex justify-content-center align-items-center">
                                                    <FileUploader
                                                        withPreview
                                                        accept="image/*"
                                                        name="image-uploader-multiple"
                                                        randomizeFilename
                                                        storageRef={firebase.storage().ref("projects")}
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
                                <div className="mb-sm-50  mb-20 detail-btns pl-25">

                                    <div>
                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                            Başlık
                                        </label>
                                        <div class="mt-1 w-full dflex">
                                            <textarea onChange={this.handleChange} id="header" name="header" rows="1" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Başlık"></textarea>
                                        </div>

                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                            Gücü
                                        </label>
                                        <div class="mt-3 dflex ">
                                            <textarea onChange={this.handleChange} id="about" name="about" rows="1" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Gücü"></textarea>
                                        </div>
                                    </div>

                                    <button
                                        className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                        onClick={e => (this.submitData())}
                                    >
                                        Oluştur
                                    </button>
                                    <button
                                        to={"/product-add"}
                                        component={Link}
                                        className="button btn-base btn-lg mb-20 mb-sm-0"
                                        onClick={() => { this.setState({ data: {} }) }}
                                    >
                                        İptal et
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

export default CreatePorject;