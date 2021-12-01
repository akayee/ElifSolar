import React, { useState } from 'react';
import styles from '../assets/mystyle.module.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';
import dokuzeylül from '../assets/projeler/ges.jpg';
import adanakaratas from '../assets/projeler/adanakaratas.jpg';
import ankaracevrekoruma from '../assets/projeler/cevrekoruma.jpg';
import caykur from '../assets/projeler/caykur.jpg';
import saglikbakanligi from '../assets/projeler/saglikbakanligi.jpg';
import beonfabrikasi from '../assets/projeler/beonfabrikasi.jpg';
import tatlar from '../assets/projeler/tatlar.jpg';
import yuzengesjaponya from '../assets/projeler/yuzengesjaponya.jpg';

const projects = [{
    adi: "STM ve DSİ GES Projesi",
    img: yuzengesjaponya,
    summary: "15 MW"
}, {
    adi: "Dokuz Eylül Üniversitesi GES Projesi",
    img: dokuzeylül,
    summary: "10 MW"
},
{
    adi: "Adana Karataş Belediyesi GES Projesi",
    summary: "5 MW",
    img: adanakaratas
},
{
    adi: "Aksaray Çatı GES",
    summary: "1 MW",
    img: ankaracevrekoruma
},
{
    adi: "Aksaray Çatı GES",
    summary: "350 kW",
    img: caykur
},
{
    adi: "Aksaray Çatı GES",
    summary: "300 kW",
    img: saglikbakanligi
},
{
    adi: "Aksaray Arazi GES",
    summary: "5 MW.",
    img: beonfabrikasi
},
{
    adi: "Bursa Arazi GES",
    summary: "5 MW",
    img: tatlar
},
{
    adi: "İzmir Arazi GES",
    summary: "10 MW",
    img: tatlar
},
{
    adi: "Konya Arazi GES",
    summary: "15 MW",
    img: tatlar
},
{
    adi: "Hatay Arazi GES",
    summary: "10 MW",
    img: tatlar
},
{
    adi: "Nevşehir Soğuk Hava Çatı GES",
    summary: "2.5 MW",
    img: tatlar
},
{
    adi: "İzmir Çatı GES",
    summary: "5 MW",
    img: tatlar
},
{
    adi: "Kırşehir Arazi GES",
    summary: "4.5 MW",
    img: tatlar
},
{
    adi: "Düzce Çatı GES",
    summary: "2.5 MW",
    img: tatlar
},
{
    adi: "Düzce Çatı / Arazi GES",
    summary: "15 MW",
    img: tatlar
}
];
function Projects(props) {

    const renderItem = (index, key) => {
        return <Col md="4" sm="12" key={key} className={styles.projectItem}>
            <div>
                <p className={styles.projecTitle}>{projects[key].adi}</p>
            </div>
            <div>
                <p className={styles.projecSummarry}> {projects[key].summary}</p>
            </div>
            
        </Col>;
    }

    return <div>
        <h1 className={styles.bigblue}> Projeler ve İş Bitirmeler</h1>
        <div style={{ textAlign: "center", fontFamily: "'Courier New', monospace", alignItems: "center", }}>Şirketlerimiz tarafından yürütülen çok sayıda proje yer almaktadır. Hizmet verdiğimiz alanlar ile alakalı projelerimiz aşağıda listelenmektedir.</div>
        <div >
            <Row className={styles.projectList} >
                {projects.map((item, index) => {
                    return renderItem(item, index);
                })}
            </Row>
        </div>

        <a href="https://www.freepik.com/photos/green">Green photo created by wirestock - www.freepik.com</a>
    </div>
};


export default Projects;