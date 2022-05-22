import React, { useState, useEffect } from 'react';
import styles from '../assets/mystyle.module.css';
import { Container } from 'reactstrap';

import { takeData } from '../firebase/auth';

import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';


function Actions(props) {
    const [project, setProjects] = useState(null);
    const [renderCount, setRenderCount] = useState(5);
    useEffect(async () => {
        await takeData("actions").on('value', (snapshot) => {
            let data = snapshot.val();
            setProjects(data)
        });
    }, [])
    const increaseRender = () => {
        setRenderCount(renderCount + 1)

    }
    const renderItem = (index, key) => {
        return <Col md="6" sm="12" lg="12" key={key} >

            <p className="text-lime p-3  bg-white/[60] text-center text-2xl font-semibold">{index.header}</p>
            <Row >
                {index.image_gallery.map((images, keyo) => <Col md="6" sm="6" lg="6" key={keyo} ><div className='max-w-full bg-white/[60]'>
                    <img className={styles.projectImage} src={images} />

                </div></Col>)}
            </Row>

            <div className='max-w-full p-6  rounded shadow-lg'>
                <p style={{ textAlign: "center", fontFamily: "'Courier New', monospace", alignItems: "center", }}> {index.about}</p>
                <div className='flex justify-center'>
                    {index.videolink &&<div dangerouslySetInnerHTML={{ __html: index.videolink }}>
                    </div> }
                    
                </div>

            </div>


        </Col>;
    }

    return <div>
        <Container>
            <div >
                <h1 className="text-lime text-3xl font-semibold">Elif Solar Ne Yapıyor?</h1>
            </div>

            <div >
                <Row className={styles.projectList} >
                    {project && Object.keys(project).map((item, index) => {
                        return renderItem(project[item], index);
                    })}
                    <div className='max-w-full p-6 items-center text-lime p-3  bg-white/[60] text-center text-1xl font-semibold'>
                        <button className='flex justify-center ' onClick={increaseRender} > Daha Fazla Göster ...</button>
                    </div>

                </Row>
            </div>
        </Container>
    </div>
};


export default Actions;