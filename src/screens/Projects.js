import React, { useState } from 'react';
import styles from '../assets/mystyle.module.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';
import dokuzeylül from '../assets/img/418.jpg';
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
import Duzce from '../assets/projeler/saglikbakanligi.jpg'
import Duzce2 from '../assets/projeler/DuzceCatiges.jpeg'
import Catiges13 from '../assets/projeler/Catiges13.jpeg'

const projects = [{
    adi: "STM ve DSİ GES Projesi",
    img: yuzengesjaponya,
    summary: "15 GW"
}, {
    adi: "Dokuz Eylül Üniversitesi GES Projesi",
    img: dokuzeylül,
    summary: "10 MW"
},
{
    adi: "Adana Karataş Belediyesi GES Projesi",
    summary: "3 MW",
    img: adanakaratas
},
{
    adi: "Aksaray Çatı GES",
    summary: "1.150 kW",
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
    adi: "Aksaray Arazi GES Projesi",
    summary: "20 MW.",
    img: Catiges2
},
{
    adi: "Bursa TOFAŞ Çatı GES Projesi",
    summary: "5 MW",
    img: ankaracevrekoruma
},
{
    adi: "İzmir Çatı GES Lezita Projesi",
    summary: "5 MW",
    img: caykur
},
{
    adi: "Hatay Çatı GES Projesi",
    summary: "10 MW",
    img: Catiges6
},
{
    adi: "Nevşehir Soğuk Hava Çatı GES Projesi",
    summary: "2.5 MW",
    img: Catiges5
},
{
    adi: "Kırşehir Arazi GES Projesi",
    summary: "4.5 MW",
    img: Catiges7
},
{
    adi: "Düzce Çatı GES Projesi",
    summary: "2.5 MW",
    img: Duzce
},
{
    adi: "Düzce Çatı / Arazi GES Projesi",
    summary: "15 MW",
    img: Duzce2
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