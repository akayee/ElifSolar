import React from 'react';
import {
    Link, HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { addData, takeData } from '../firebase/auth';
import firebase from "../firebase/firebase";

import '../assets/tailwind.css';

import Accounting from './Accounting';

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
            logged: firebase.auth().currentUser.uid,
            admin: false,
            users:null
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

    componentDidMount(){
        var that=this;
        takeData("users").on('value', (snapshot) => {
            let data = snapshot.val();
            console.log(data)
            let isAdmin = false
            Object.keys(data).map((item,index)=>{
                console.log("key",item)
                console.log("uid",firebase.auth().currentUser.uid )
                console.log("value",data[item])
                if(item===firebase.auth().currentUser.uid && data[item]===true)
                {
                    isAdmin = true
                    console.log("isAdmin",isAdmin)
                }
            })

            this.setState({...that.state,admin:isAdmin})
        });

        console.log(this.state.admin)
    }

    render() {
        if(this.state.admin){
            return <Accounting /> 
        } 
        return  <div className="iron-product-add-wrap pt-50 px-sm-50 px-md-0">
            <div className="my-0 d-flex justify-content-center align-items-center">

                <h2><b>Proje Olu??tur</b></h2>
            </div>
            <Link  to="/admin"> <div className={styles.bigbluelink}>Anl??k Aktivite Olu??tur</div></Link>
            {this.state.logged ? null : <Redirect to="/" />}
            <Col container spacing={3} className="my-0 d-flex justify-content-center align-items-center">

                <Col item xs={12} sm={12} md={12} lg={12} className="py-0 mx-auto">
                    <Col container spacing={32} className="my-0">
                        <Row item xs={12} sm={12} md={12} lg={12} className="py-0 mb-md-0 mb-30">
                            <Row container spacing={2} className="iron-product-gallery my-0">


                                {data.image_gallery && data.image_gallery.map((gallery, index) => {
                                    return (
                                        <Col item xs={2} sm={3} md={2} lg={2} key={index} className="py-0">
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
                                        <label for="about" className="block text-sm font-medium text-gray-700">
                                            Ba??l??k
                                        </label>
                                        <div className="mt-1 w-full dflex">
                                            <textarea onChange={this.handleChange} id="header" name="header" rows="1" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ba??l??k"></textarea>
                                        </div>

                                        <label for="about" className="block text-sm font-medium text-gray-700">
                                            G??c??
                                        </label>
                                        <div className="mt-3 dflex ">
                                            <textarea onChange={this.handleChange} id="about" name="about" rows="1" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="G??c??"></textarea>
                                        </div>
                                    </div>

                                    <button
                                        className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                        onClick={e => (this.submitData())}
                                    >
                                        Olu??tur
                                    </button>
                                    <button
                                        to={"/product-add"}
                                        component={Link}
                                        className="button btn-base btn-lg mb-20 mb-sm-0"
                                        onClick={() => { this.setState({ data: {} }) }}
                                    >
                                        ??ptal et
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