import React, { useState } from 'react';
import styles from '../assets/mystyle.module.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';
import dokuzeylül from '../assets/projeler/ges.jpg';
import adanakaratas from '../assets/projeler/adanakaratas.jpg';
import ankaracevrekoruma from '../assets/projeler/cevrekoruma.jpg';
import caykur from '../assets/projeler/caykur.jpg';
import yuzengesjaponya from '../assets/projeler/yuzengesjaponya.jpg';
import CatiGes1 from '../assets/projeler/Catiges14.jpeg'
import Catiges2 from '../assets/projeler/Catiges2.jpeg'
import Catiges4 from '../assets/projeler/Catiges4.jpeg'
import Catiges5 from '../assets/projeler/Catiges5.jpeg'
import Catiges6 from '../assets/projeler/Catiges6.jpeg'
import Catiges7 from '../assets/projeler/Catiges7.jpeg'
import Inverter9 from '../assets/projeler/Inverter9.jpeg'
import Trafo8 from '../assets/projeler/Trafo8.jpeg'
import Zeminges10 from '../assets/projeler/Zeminges10.jpeg'
import Zeminges12 from '../assets/projeler/Zeminges12.jpeg'
import Catiges13 from '../assets/projeler/Catiges13.jpeg'

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
    img: CatiGes1
},
{
    adi: "Aksaray Çatı GES",
    summary: "350 kW",
    img: Catiges4
},
{
    adi: "Aksaray Çatı GES",
    summary: "300 kW",
    img: Catiges13
},
{
    adi: "Aksaray Arazi GES",
    summary: "5 MW.",
    img: Catiges2
},
{
    adi: "Bursa Arazi GES",
    summary: "5 MW",
    img: ankaracevrekoruma
},
{
    adi: "İzmir Arazi GES",
    summary: "10 MW",
    img: caykur
},
{
    adi: "Konya Arazi GES",
    summary: "15 MW",
    img: Zeminges10
},
{
    adi: "Hatay Arazi GES",
    summary: "10 MW",
    img: Zeminges12
},
{
    adi: "Nevşehir Soğuk Hava Çatı GES",
    summary: "2.5 MW",
    img: Catiges5
},
{
    adi: "İzmir Çatı GES",
    summary: "5 MW",
    img: Catiges6
},
{
    adi: "Kırşehir Arazi GES",
    summary: "4.5 MW",
    img: Catiges7
},
{
    adi: "Düzce Çatı GES",
    summary: "2.5 MW",
    img: Inverter9
},
{
    adi: "Düzce Çatı / Arazi GES",
    summary: "15 MW",
    img: Trafo8
}
];
function Projects(props) {

    const renderItem = (index, key) => {
        return <Col md="6" sm="12" lg="3" key={key} >
            <div className='max-w-sm  border-t-4 border-indigo-600 rounded shadow-lg mt-6 rounded-lg'>
                <img className={styles.projectImage} src={projects[key].img} />
                <p className="text-center text-xl font-sans hover:font-serif">{projects[key].adi}</p>
            </div>
            <div className='max-w-sm p-8 border-t-4 border-indigo-600 rounded shadow-lg'>
                <p className="text-center"> {projects[key].summary}</p>
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

    </div>
};


export default Projects;