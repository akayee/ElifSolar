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
            <h1 className="text-lime text-5xl font-semibold text-center">Elif Global Solar Güneş Enerjisi Sistemleri</h1>

            <Col sm="6">
                <div >
                    <p className="text-lime">
                        Uzman kadromuz ve tecrübeli iş ortaklarımızdan yararlanmak için teklif alın.
                    </p>

                    <div>

                    </div>
                    <div className="max-w-md py-4 px-8 bg-white/[60] shadow-lg rounded-lg my-20 ">
                        <h2 className="text-lime text-3xl font-semibold">
                            Garantili Satış
                        </h2>
                        <p className="mt-2 text-gray-400 font-serif">
                            Devletimizin KDV Desteği ve Fazla Üretimde Alım Garantisi Fırsatlarını Kaçırmayın.
                        </p>

                    </div>
                    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 ">
                        <h2 className="text-lime text-3xl font-semibold">
                            Tarım Bakanlığı Desteği
                        </h2>
                        <p className="mt-2 text-gray-400 font-serif">
                            Tarım Bakanlığı %50'ye kadar hibe desteği sunmaktadır. Bu hibe süreci takibi de dahil olmak üzere anahtar teslim projelendirme.
                        </p>

                    </div>


                </div>
            </Col>


        </Container>
    </div>
}
export default Anasayfa;