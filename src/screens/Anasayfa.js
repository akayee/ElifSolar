import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../assets/mystyle.module.css';



import AnasayfaResim from '../assets/img/AnaekranResim.jpg';
import { Button, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label, FormText } from 'reactstrap';

function Anasayfa(props) {
    const [modal, setModal] = useState(false);
    const [state, setState] = useState({ fName: "", lName: "", email: "", phone: "", firmaAdi: "", sistemTipi: "Fabrika Çatısı", aciklama: "" });
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const toggle = () => setModal(!modal);
    const teklifOlustur = () => {
        console.log(state)
    }
    const sistemTipi = ["Fabrika Çatısı", "İşyeri Çatısı", "Müstakil Ev", "Bağ Evi - Prefabrik Yapı", "Boş Arazi", "Tarımsal Sulama", "Baraj/Gölet", "Diğer Alanlar"]

    return <div style={{
        backgroundImage: `url(${AnasayfaResim})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        minHeight: "86vh",
        overflow: "hidden",
    }}>

        <Container >
            <h1 className={styles.bigblue}>Elif Global Solar Güneş Enerjisi Sistemleri</h1>
            <Col sm="6">
                <div className={styles.anasayfaCard}>
                    Uzman kadromuz ve tecrübeli iş ortaklarımızdan yararlanmak için teklif alın.
                    <div>

                    </div>
                    <div className={styles.anasayfaDuyuru}>
                        Devlet KDV Desteği ve Fazla Üretimde Alım Garantisi Fırsatlarını Kaçırmayın.
                    </div>
                    <div className={styles.anasayfaDuyuru}>
                        Tarım Bakanlığı Hibesi dahil olmak üzere anahtar teslim projelendirme.
                    </div>

                </div>
            </Col>


        </Container>
    </div>
}
export default Anasayfa;