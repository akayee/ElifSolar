import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/tailwind.css';

import styles from '../assets/mystyle.module.css';



import AnasayfaResim from '../assets/img/AnaekranResim.jpg';
import { Col, Container } from 'reactstrap';

function Anasayfa(props) {

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