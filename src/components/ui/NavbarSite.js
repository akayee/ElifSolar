import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import styles from '../../assets/mystyle.module.css';
import logo from '../../assets/img/Logo.png'

const NavbarSite = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="rgba(255,255,255,0.7)" light expand="md">
        <NavbarBrand to="/"><div className={styles.bigbluelink}> <img className={styles.logoImage}   src={logo}  /> </div></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link  to="/"> <div className={styles.bigbluelink}>Anasayfa</div></Link>
            </NavItem>
            <NavItem>
              <Link to="/about"><div className={styles.bigbluelink}>Hakkımızda</div></Link>
            </NavItem>
            <NavItem>
              <Link to="/dashboard"><div className={styles.bigbluelink}>Projeler</div></Link>
            </NavItem>
          </Nav>
          <NavbarText><div className={styles.blue}>Yenilenebilir Enerji Kaynakları</div></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSite;