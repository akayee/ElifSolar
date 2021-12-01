import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../assets/mystyle.module.css';



import AnasayfaResim from '../assets/img/AnaekranResim.jpg';
import { Button, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label, FormText } from 'reactstrap';

function Anasayfa(props) {
    const [modal, setModal] = useState(false);
    const [state, setState] = useState({ fName: "", lName: "",email:"",phone:"",firmaAdi:"",sistemTipi:"Fabrika Çatısı",aciklama:"" });
    const handleChange = e => {
            const { name, value } = e.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    const toggle = () => setModal(!modal);
    const teklifOlustur = ()=> {
        console.log(state)}
    const sistemTipi =["Fabrika Çatısı", "İşyeri Çatısı","Müstakil Ev","Bağ Evi - Prefabrik Yapı", "Boş Arazi", "Tarımsal Sulama","Baraj/Gölet", "Diğer Alanlar"]

    return <div style={{
        backgroundImage: `url(${AnasayfaResim})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        minHeight: "100vh",
        overflow: "hidden",
    }}>

        <Container >
            <h1 className={styles.bigblue}>Elif Global Solar Güneş Enerjisi Sistemleri</h1>
            <Col sm="6">
                <div className={styles.anasayfaCard}>
                    Uzman kadromuz ve tecrübeli iş ortaklarımızdan yararlanmak için teklif alın.
           <div>
                        <Button outline color="success" onClick={toggle}>Teklif Al</Button>
                    </div>
                    <div className={styles.anasayfaDuyuru}>
                        Devlet KDV Desteğini Kaçırmayın.
           </div>

                </div>
            </Col>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Teklif Al</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label  for="firmaAdi">Firma Adı</Label>
                            <Input required type="text" name="firmaAdi" onChange={handleChange} id="firmaAdi" placeholder="Firmanızın Adı" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Mail Adresi</Label>
                            <Input required type="email" name="email" onChange={handleChange} id="exampleEmail" placeholder="info@adenerjimühendislik.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="fName">Adı</Label>
                            <Input required type="text" name="fName" onChange={handleChange} id="fName" placeholder="Adınız" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Telefon</Label>
                            <Input required type="numeric" onChange={handleChange} name="phone" id="phone" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="guc">Kurulmak İstenen Güç (kw)</Label>
                            <Input required type="text" onChange={handleChange} name="guc" id="guc" />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="aciklama">Detaylı Açıklama</Label>
                            <Input required type="text" onChange={handleChange} name="aciklama" id="aciklama" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="sistemTipi">Sistemin Kurulacağı Zemin</Label>
                            <Input type="select" onChange={handleChange} name="sistemTipi" id="sistemTipi">
                            {sistemTipi.map(item=>{
                                return(<option value={item} >{item}</option>)
                                
                            })}
                            </Input>
                        </FormGroup>
                        <Button color="success" onSubmit={teklifOlustur}>Teklif İsteği Oluştur</Button>{' '}
                         <Button color="secondary" onClick={toggle}>İptal</Button>
                    </Form>
                </ModalBody>
            </Modal>

        </Container>
    </div>
}
export default Anasayfa;