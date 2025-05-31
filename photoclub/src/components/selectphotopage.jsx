import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DniPhoto from "../assets/dni.png";
import PasEsp from "../assets/pasesp.png";
import VisaUsa from "../assets/visausa.png";
import LicCond from "../assets/lic.png";
import VisaCan from "../assets/visacanada.png";
import VisaChina from "../assets/visachina.png";

const SelectPhotoPage = (props) => {
  return (
    <Container fluid="md" className="justify-content-center">
      <Row>
        <Col>
          <Card
            style={{ width: "18rem", alignContent: "center" }}
            onClick={() => {
              props.setDniPhotoPage(true);
              props.setHomePage(false);
              props.setSelectPhotoPage(false);
              props.setAboutUs(false);
              //   props.setContactPage(false);
              props.setPasEspPage(false);
              props.setVisaUsaPage(false);
              props.setLicCondPage(false);
              props.setVisaCanadaPage(false);
              props.setVisaChinaPage(false);
            }}
          >
            <Card.Img
              variant="top"
              src={DniPhoto}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Foto para DNI</Card.Title>
              <Card.Text>
                Foto nítida, de frente, con expresión neutra, sin gafas oscuras
                ni gorros, y con fondo blanco o claro. Las dimensiones suelen
                ser 26x32 mm
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="dark" size="lg">
                  Comenzar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "18rem" }}
            onClick={() => {
              props.setPasEspPage(true);
              props.setDniPhotoPage(false);
              props.setHomePage(false);
              props.setSelectPhotoPage(false);
              props.setAboutUs(false);
              //   props.setContactPage(false);
              props.setVisaUsaPage(false);
              props.setLicCondPage(false);
              props.setVisaCanadaPage(false);
              props.setVisaChinaPage(false);
            }}
          >
            <Card.Img
              variant="top"
              src={PasEsp}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Foto Pasaporte Español</Card.Title>
              <div>
                Reciente, en color, con fondo blanco y uniforme, mostrando el
                rostro de frente, con expresión neutra(26x32 mm)
              </div>

              <div className="d-flex justify-content-center mt-4">
                <Button variant="dark" size="lg">
                  Comenzar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "18rem" }}
            onClick={() => {
              props.setVisaUsaPage(true);
              props.setPasEspPage(false);
              props.setDniPhotoPage(false);
              props.setHomePage(false);
              props.setSelectPhotoPage(false);
              props.setAboutUs(false);
              // props.setContactPage(false);
              props.setLicCondPage(false);
              props.setVisaCanadaPage(false);
              props.setVisaChinaPage(false);
            }}
          >
            <Card.Img
              variant="top"
              src={VisaUsa}
              style={{ height: "200px", objectFit: "cover" }}
            ></Card.Img>
            <Card.Body>
              <Card.Title>Foto para Visa EE.UU</Card.Title>
              <div>
                Imagen tomada de frente, con fondo blanco, expresión neutra y
                sin accesorios que cubran el rostro. Tamaño de (2x2 pulg)
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="dark" size="lg">
                  Comenzar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem" }}
            onClick={() => {
              props.setLicCondPage(true);
              props.setVisaUsaPage(false);
              props.setPasEspPage(false);
              props.setDniPhotoPage(false);
              props.setHomePage(false);
              props.setSelectPhotoPage(false);
              props.setAboutUs(false);
              // props.setContactPage(false);
              props.setVisaCanadaPage(false);
              props.setVisaChinaPage(false);
            }}
          >
            <Card.Img
              variant="top"
              src={LicCond}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Foto Lic de Conducción</Card.Title>
              <div>
                Reciente, en color, con fondo blanco y uniforme, mostrando el
                rostro de frente, con expresión neutra(1x1 pulg)
              </div>
              <div className="d-flex justify-content-center mt-2">
                <Button variant="dark" size="lg">
                  Comenzar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "18rem" }}
            onClick={() => {
              props.setVisaCanadaPage(true);
              props.setLicCondPage(false);
              props.setVisaUsaPage(false);
              props.setPasEspPage(false);
              props.setDniPhotoPage(false);
              props.setHomePage(false);
              props.setSelectPhotoPage(false);
              props.setAboutUs(false);
              // props.setContactPage(false);

              props.setVisaChinaPage(false);
            }}
          >
            <Card.Img
              variant="top"
              src={VisaCan}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Foto Visa Canada</Card.Title>
              <div>
                Foto para visa canadiense: tamaño 35×45 mm, fondo blanco, rostro
                centrado (31–36 mm), expresión neutra, sin sombras.
              </div>
              <div className="d-flex justify-content-center mt-2">
                <Button variant="dark" size="lg">
                  Comenzar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "18rem" }}
            onClick={() => {
              props.setVisaChinaPage(true);
              props.setLicCondPage(false);
              props.setVisaUsaPage(false);
              props.setPasEspPage(false);
              props.setDniPhotoPage(false);
              props.setHomePage(false);
              props.setSelectPhotoPage(false);
              props.setAboutUs(false);
              //props.setContactPage(false);
              props.setVisaCanadaPage(false);
            }}
          >
            <Card.Img
              variant="top"
              src={VisaChina}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Foto para Visa China</Card.Title>
              <div>
                Foto visa China: 33×48 mm, fondo blanco, rostro centrado, color,
                reciente, sin gafas oscuras ni sombras.
              </div>
              <div className="d-flex justify-content-center mt-2">
                <Button variant="dark" size="lg">
                  Comenzar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SelectPhotoPage;
