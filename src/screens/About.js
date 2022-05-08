import React from 'react';
import styles from '../assets/mystyle.module.css';
import siemensLogo from '../assets/img/siemens-logo-default.png';
import kacoLogo from '../assets/img/member-kaco.jpg';
import hakkimizdaResim from '../assets/img/Hakkimizda.jpg';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/tailwind.css';
function About(props) {

    return  <div className='bg-gradient-to-bl' style={{
        backgroundImage: `url(${hakkimizdaResim})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "contain",
        backgroundPosition:"right bottom",
        overflow: "hidden",
    }}>
        <Container>
            <h1 className="text-lime text-3xl font-semibold"> Hakkımızda</h1>
            <div className="max-w-full py-4 px-8 bg-white/[60] shadow-lg rounded-lg my-20 " >
                <h3 className="text-lime text-3xl font-semibold">İletişim:</h3>
                <p>info@elifsolar.com</p>
                <p>adnan@elifsolar.com</p>
                <p>Eskişehir Yolu SMK Kule</p>
                <p>+90 544 496 24 48</p>
                <p>0312 295 62 54</p>
                <p>0312 217 10 77</p>
            </div>
            <div className="max-w-full py-4 px-8 bg-white/[60] shadow-lg rounded-lg my-20 " >
            <h3 className="text-lime text-3xl font-semibold">Şirketimiz:</h3>
                <p>AD Mühendislik grup şirketlerinden olan Elif Global Solar şirketimiz güneş enerjisi sistemleri kurmaktadır.
                Şirketimiz Siemens yatırımları için  Türkiye'deki tek yetkilidir.</p>
                <p>Yönetim Kurulu Başkanımız Yüksek İnşaat Mühendisidir ve Emekli Bürokrattır.</p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                </div>
            </div>
            
            <div className="max-w-full py-4 px-8 bg-white/[60] shadow-lg rounded-lg my-20 ">
            <h3 className="text-lime text-3xl font-semibold">Sektörler:</h3>
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
            <div className="max-w-full py-4 px-8 bg-white/[60] shadow-lg rounded-lg my-20 ">
            <h3 className="text-lime text-3xl font-semibold">İş Ortaklarımız:</h3>
            <ul>
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
                <li> <div >
                    AD Enerji Mühendislik
                </div></li>
                <li> <div >
                    Aslan Solar Grup
                </div></li>
            </ul>
                
            </div>
        </Container>

    </div>
};

export default About