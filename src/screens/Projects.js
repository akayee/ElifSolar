import React, { useState,useEffect } from 'react';
import styles from '../assets/mystyle.module.css';

import { takeData } from '../firebase/auth';

import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';


function Projects(props) {
    const [project,setProjects] = useState(null)
    useEffect(async()=>{
        await takeData("projects").on('value',(snapshot)=>{
            let data =snapshot.val();
            setProjects(data)
          } );
    },[])

    const renderItem = (index, key) => {
        return <Col md="6" sm="12" lg="4" key={key} >
            <div className='max-w-full bg-white/[60]  rounded  mt-5'>
                <img className={styles.projectImage} src={index.image} />
                
            </div>
            <div className='max-w-full p-6  rounded shadow-lg'>
            <p className="text-lime p-3  bg-white/[60] text-center text-1xl font-semibold">{index.header}</p>
                <p style={{ textAlign: "center", fontFamily: "'Courier New', monospace", alignItems: "center", }}> {index.about}</p>
            </div>

        </Col>;
    }

    return <div>
        <h1 className={styles.bigblue}> Projeler ve İş Bitirmeler</h1>
        <div style={{ textAlign: "center", fontFamily: "'Courier New', monospace", alignItems: "center", }}>Şirketlerimiz tarafından yürütülen çok sayıda proje yer almaktadır. Hizmet verdiğimiz alanlar ile alakalı projelerimiz aşağıda listelenmektedir.</div>
        <div >
            <Row className={styles.projectList} >
                {project&&Object.keys(project).map((item, index) => {
                    return renderItem(project[item], index);
                })}
            </Row>
        </div>

    </div>
};


export default Projects;