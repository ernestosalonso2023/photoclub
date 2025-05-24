import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import DniPhoto from "../assets/dni.png";
import PasEsp from "../assets/pasesp.png";
import VisaUsa from "../assets/visausa.png";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";

const MenuHome = (props) => {
  return (
    <Nav.Link
      onClick={() => {
        props.parameter.setHomePage(true);
        props.parameter.setAboutUs(false);
        props.parameter.setContactPage(false);
        props.parameter.setSelectPhotoPage(false);
        props.parameter.setDniPhotoPage(false);
        props.parameter.setPasEspPage(false);
        props.parameter.setVisaUsaPage(false);
        props.parameter.setLicCondPage(false);
        props.parameter.setVisaCanadaPage(false);
        props.parameter.setVisaChinaPage(false);

      }}
    >
      Inicio
    </Nav.Link>
    //<Button variant='dark' size='lg' onClick={()=>{props.setHomePage(!props.showhomepage)}}></Button>
  );
};
const MenuAbout = (props) => {
  return (
    <NavDropdown title="Acerca de" id="basic-nav-dropdown">
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setAboutUs(true);
          props.parameter.setHomePage(false);
          props.parameter.setContactPage(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setDniPhotoPage(false);
          props.parameter.setPasEspPage(false);
          props.parameter.setVisaUsaPage(false);
          props.parameter.setLicCondPage(false);
          props.parameter.setVisaCanadaPage(false);
          props.parameter.setVisaChinaPage(false);

        }}
      >
        Nosotros
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setContactPage(true);
          props.parameter.setDniPhotoPage(false);
          props.parameter.setHomePage(false);
          props.parameter.setAboutUs(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setPasEspPage(false);
          props.parameter.setVisaUsaPage(false);
          props.parameter.setLicCondPage(false);
          props.parameter.setVisaCanadaPage(false);
          props.parameter.setVisaChinaPage(false);

        }}
      >
        {" "}
        Contacto
      </NavDropdown.Item>
    </NavDropdown>
  );
};
const MenuTypePhoto = (props) => {
  return (
    <NavDropdown title="Tipos de Foto" id="basic-nav-dropdown">
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setDniPhotoPage(true);
          props.parameter.setHomePage(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setAboutUs(false);
          props.parameter.setContactPage(false);
          props.parameter.setPasEspPage(false);
          props.parameter.setVisaUsaPage(false);
          props.parameter.setLicCondPage(false);
          props.parameter.setVisaCanadaPage(false);
          props.parameter.setVisaChinaPage(false);

          

        }}
      >
        Foto DNI Español {"\u00A0"}
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setPasEspPage(true);
          props.parameter.setDniPhotoPage(false);
          props.parameter.setHomePage(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setAboutUs(false);
          props.parameter.setContactPage(false);
          props.parameter.setVisaUsaPage(false);
          props.parameter.setLicCondPage(false);
          props.parameter.setVisaCanadaPage(false);
          props.parameter.setVisaChinaPage(false);

        }}
      >
        {" "}
        Foto Pasaporte Español {"\u00A0"}
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setVisaUsaPage(true);
          props.parameter.setPasEspPage(false);
          props.parameter.setDniPhotoPage(false);
          props.parameter.setHomePage(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setAboutUs(false);
          props.parameter.setContactPage(false);
          props.parameter.setLicCondPage(false);
          props.parameter.setVisaCanadaPage(false);
          props.parameter.setVisaChinaPage(false)
        }}
      >
        Foto Visa a EUA {"\u00A0"}
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setLicCondPage(true);
          props.parameter.setVisaUsaPage(false);
          props.parameter.setPasEspPage(false);
          props.parameter.setDniPhotoPage(false);
          props.parameter.setHomePage(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setAboutUs(false);
          props.parameter.setContactPage(false);
          props.parameter.setVisaCanadaPage(false);
          props.parameter.setVisaChinaPage(false)
        }}
      >
        Foto Licencia Conducir
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setVisaCanadaPage(true);
          props.parameter.setLicCondPage(false);
          props.parameter.setVisaUsaPage(false);
          props.parameter.setPasEspPage(false);
          props.parameter.setDniPhotoPage(false);
          props.parameter.setHomePage(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setAboutUs(false);
          props.parameter.setContactPage(false);
          props.parameter.setVisaChinaPage(false)
        }}
      >
        Foto Visa Canada
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => {
          props.parameter.setVisaChinaPage(true)
          props.parameter.setDniPhotoPage(false);
          props.parameter.setHomePage(false);
          props.parameter.setSelectPhotoPage(false);
          props.parameter.setAboutUs(false);
          props.parameter.setContactPage(false);
          props.parameter.setPasEspPage(false);
          props.parameter.setVisaUsaPage(false);
          props.parameter.setLicCondPage(false);
          props.parameter.setVisaCanadaPage(false);
        }}
      >
        Foto Visa China {"\u00A0"}
    </NavDropdown.Item>
    </NavDropdown>
  );
};
const Menu = (props) => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <h5>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <MenuHome parameter={props}></MenuHome>
              <MenuTypePhoto parameter={props}></MenuTypePhoto>
              <MenuAbout parameter={props}></MenuAbout>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </h5>
    </Navbar>
  );
};
export default Menu;
