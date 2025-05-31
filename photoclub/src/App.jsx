import PhotoService from './services/photos' 
import axios from 'axios';
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ci from "./assets/ci.png";
import Menu from "./components/menu";
import Fotodoc from "./assets/cohete con plantilla.png";
import ContactPage from "./components/contactpage";
import SelectPhotoPage from "./components/selectphotopage";
import AboutUsPage from "./components/aboutus";
import DniPhotoPage from "./components/dniphotopage";
import PasEspPage from "./components/pasesppage";
import VisaUsaPage from "./components/visausapage";
import LicCondPage from "./components/liccondpage";
import VisaCanadaPage from "./components/visacanadapage";
import VisaChinaPage from "./components/visachinapage";
import FooterPage from "./components/footerpage";

const HomePage = (props) => {
  // const [showselectphotopage, setSelectPhotoPage]=useState(false)
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Haz tu mismo tu foto ideal en tamaño carnet y para otros documentos
          </h2>
          <br />
          <br />
          <h5>
            Obtén una foto, con tu teléfono, desde la comodidad de la casa.
          </h5>
         
        </Col>
        <Col>
           <Image
            src={Fotodoc}
            fluid
            rounded
            width={300}
            height={500}
            alt="Foto ejemplo"
          />
        </Col>
         
      </Row>
      <Row>
        <Col>
        <Button
            variant="dark"
            size="lg"
            onClick={() => {
              //props.setSelectPhotoPage(true),
              props.setHomePage(!props.showhomepage);
              props.setSelectPhotoPage(true);
            }}
          >
            Seleccionar el tipo de foto
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const App = () => {
  const [showcontactpage, setContactPage] = useState(false);
  const [showaboutus, setAboutUs] = useState(false);
  const [showhomepage, setHomePage] = useState(true);
  const [showmainmenu, setMainMenu] = useState(true);
  const [showselectphotopage, setSelectPhotoPage] = useState(false);
  const [showdniphotopage, setDniPhotoPage] = useState(false);
  const [showpasesppage, setPasEspPage] = useState(false);
  const [showvisausa, setVisaUsaPage] = useState(false);
  const [showliccond, setLicCondPage] = useState(false);
  const [showvisacanada, setVisaCanadaPage] = useState(false);
  const [showvisachina, setVisaChinaPage] = useState(false);
  const [imagenUrl,setImageUrl]=useState(null);

  

   return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-begin",
          paddingLeft: "4rem",
        }}
      >
        <Menu 
          showcontactpage={showcontactpage}
          setContactPage={setContactPage}
          showaboutus={showaboutus}
          setAboutUs={setAboutUs}
          showhomepage={showhomepage}
          setHomePage={setHomePage}
          showselectphotopage={showselectphotopage}
          setSelectPhotoPage={setSelectPhotoPage}
          showdniphotopage={showdniphotopage}
          setDniPhotoPage={setDniPhotoPage}
          showpasesppage={showpasesppage}
          setPasEspPage={setPasEspPage}
          showvisausa={showvisausa}
          setVisaUsaPage={setVisaUsaPage}
          showliccond={showliccond}
          setLicCondPage={setLicCondPage}
          showvisacanada={showvisacanada}
          setVisaCanadaPage={setVisaCanadaPage}
          showvisachina={showvisachina}
          setVisaChinaPage={setVisaChinaPage}
        ></Menu>
        <br />
        <br />
      </div>
      <hr className="my-4 border border-primary" />
      {showhomepage && (
        <HomePage
          showselectphotopage={showselectphotopage}
          setSelectPhotoPage={setSelectPhotoPage}
          showhomepage={showhomepage}
          setHomePage={setHomePage}
          showcontactpage={showcontactpage}
          setContactPage={setContactPage}
          showaboutus={showaboutus}
          setAboutUs={setAboutUs}
          showdniphotopage={showdniphotopage}
          setDniPhotoPage={setDniPhotoPage}
          showpasesppage={showpasesppage}
          setPasEspPage={setPasEspPage}
          showvisausa={showvisausa}
          setVisaUsaPage={setVisaUsaPage}
          showliccond={showliccond}
          setLicCondPage={setLicCondPage}
          showvisacanada={showvisacanada}
          setVisaCanadaPage={setVisaCanadaPage}
          showvisachina={showvisachina}
          setVisaChinaPage={setVisaChinaPage}
        />
      )}
      {showcontactpage && <ContactPage />}
      {showselectphotopage && (
        <SelectPhotoPage
          showcontactpage={showcontactpage}
          setContactPage={setContactPage}
          showaboutus={showaboutus}
          setAboutUs={setAboutUs}
          showhomepage={showhomepage}
          setHomePage={setHomePage}
          showselectphotopage={showselectphotopage}
          setSelectPhotoPage={setSelectPhotoPage}
          showdniphotopage={showdniphotopage}
          setDniPhotoPage={setDniPhotoPage}
          showpasesppage={showpasesppage}
          setPasEspPage={setPasEspPage}
          showvisausa={showvisausa}
          setVisaUsaPage={setVisaUsaPage}
          showliccond={showliccond}
          setLicCondPage={setLicCondPage}
          showvisacanada={showvisacanada}
          setVisaCanadaPage={setVisaCanadaPage}
          showvisachina={showvisachina}
          setVisaChinaPage={setVisaChinaPage}
        />
      )}
      {showaboutus && <AboutUsPage />}
      {showdniphotopage && <DniPhotoPage />}
      {showpasesppage && <PasEspPage />}
      {showvisausa && <VisaUsaPage />}
      {showliccond && <LicCondPage />}
      {showvisacanada && <VisaCanadaPage />}
      {showvisachina && <VisaChinaPage />}
      <FooterPage></FooterPage>
    </div>
  );
};

export default App;
