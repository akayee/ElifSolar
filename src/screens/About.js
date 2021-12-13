import React from 'react';
import styles from '../assets/mystyle.module.css';

import adnanyilmaz from '../assets/img/Adnanyilmaz.jpeg'


import siemensLogo from '../assets/img/siemens-logo-default.png';
import kacoLogo from '../assets/img/member-kaco.jpg';
import hakkimizdaResim from '../assets/img/Hakkimizda.jpg';
import { Container } from 'reactstrap';
function About(props) {

    return  <div style={{
        backgroundImage: `url(${hakkimizdaResim})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "contain",
        overflow: "hidden",
    }}>
        <Container>
            <h1 className={styles.baslik}> Hakkımızda</h1>
            <div className={styles.baslik} ><h3>İletişim:</h3>
                <p>info@elifsolar.com</p>
                <p>adnan@elifsolar.com</p>
                <p>Eskişehir Yolu SMK Kule</p>
            </div>
            <div className={styles.hakkimizdaAciklama} ><p>AD Mühendislik grup şirketlerinden olan Elif Global Solar şirketimiz güneş enerjisi sistemleri kurmaktadır.
                Şirketimiz Siemens yatırımları için  Türkiye'deki tek yetkilidir.</p>
                <p>Yönetim Kurulu Başkanımız Yüksek İnşaat Mühendisi Adnan YILMAZ:</p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={adnanyilmaz} alt="Logo" />
                </div>
            </div>
            
            <div className={styles.hakkimizdaIsbitirme}>
                Ad Şirketler Grubunun Yer Aldığı ve İş Bitirmelerinin Bulunduğu Diğer Sektörler.
                <li>Güneş Enerjisi Santralleri</li>
                <li>Kentsel Dönüşüm</li>
                <li>İPARD Projeleri</li>
                <li>İnşaat Yapım Onarım</li>
                <li>Tarihi Eser İnşaatı</li>
                <li>Mantar Üretim Tesisi Kurulumu</li>
                <li>İmar Planlama</li>
                <li>Park ve Bahçe İnşaatları</li>
                <li>Arıtma Tesisi Kurulumu</li>
            </div>
            <div className={styles.hakkimizdaIsortakları}>
                İş Ortaklarımız
                <li> <div >
                    <img style={{
                        height: "128px",
                        width: "128px"
                    }} src={siemensLogo} alt="Logo" />
                </div></li>
                <li> <div >
                    <img style={{
                        height: "128px",
                        width: "128px"
                    }} src={kacoLogo} alt="Logo" />
                </div></li>
                <li> <div >
                    Yıltaş Enerji
                </div></li>
            </div>
        </Container>

    </div>
};

export default About