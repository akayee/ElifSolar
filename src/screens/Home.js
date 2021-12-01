import React from 'react';
import styles from '../assets/mystyle.module.css';
import anasayfaresim from '../assets/img/10477.png';

import anasayfaResim from '../assets/img/AnaekranResim.jpg';
import siemensLogo from '../assets/img/siemens-logo-default.png';
import kacoLogo from '../assets/img/member-kaco.jpg';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, CardHeader, Container } from 'reactstrap';


function Home(props) {

    return <Container  className="landing-wrapper" >
        <Row className={styles.ansayfadiv}>
            <Col >
                <Row>
                    <Col sm="12">
                        <Card body style={{ borderRadius: "30px", padding: "10px", margin: "20px", height: "50%", paddingTop:"5%" }}>
                            <CardTitle tag="h5" className={styles.bigblue}>
                                Devlet Desteğinde Son Zamanlar
                            </CardTitle>
                            <CardText className={styles.blue}>
                                Devletimizin güneş enerjisi sistemlerine yapmış olduğu desteği kaçırmamak için elinizi çabuk tutun.
                            </CardText>
                        </Card>
                        <Card style={{ borderRadius: "30px", padding: "10px", margin: "20px", bottom: "0px", background: "linear-gradient(to right top,#65dfc9,#6cdbeb)", borderColor: "rgba(255,255,255,0)" }} body>

                            <CardTitle tag="h5" className={styles.bigblue}>Güneş Enerjisi Sistemleri</CardTitle>
                            <CardText style={{ color: "white" }} >Güneş enerjisi sistemlerinde uzman kadromuz ve sektörde lider iş ortaklarımızla size en üst düzey hizmeti sağlamaktayız.</CardText>
                            <Button outline color="info" size="lg">Teklif Al</Button>
                        </Card>
                    </Col>
                </Row>

            </Col>
            <Col  md="6" xs="12" >
                    <Row style={{alignItems:"center",justifyContent:"center",paddingBottom:"5%",}} >
                        <Card style={{backgroundColor: "rgba(255,255,255,0)",borderColor: "rgba(255,255,255,0)" }}  className={styles.bigblue}>
                        <CardImg top  src={anasayfaresim} alt="Card image cap" />
                        <CardHeader>İş Ortaklarımız
                        </CardHeader>
                        <Row >
                            <Col>
                                <Card>
                                    <CardImg top style={{
                                        maxHeight: 128,
                                        maxWidth: 128
                                    }} src={siemensLogo} alt="Card image cap" />
                                    <CardText>
                                        Siemens
                                </CardText>
                                </Card>
                            </Col>
                            <Col>
                            <Card>
                                <CardText>
                                    Yıltaş Enerji
                            </CardText>
                            </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardImg top style={{
                                        maxHeight: 128,
                                        maxWidth: 128
                                    }} src={kacoLogo} alt="Card image cap" />
                                    <CardText>
                                        KACO Energy
                                </CardText>
                                </Card>
                            </Col>
                            
                        </Row>

                    </Card>
                    </Row>
                    



            </Col>

        </Row>


    </Container>
};

export default Home;