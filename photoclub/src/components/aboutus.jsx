import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button"; 
import Card from "react-bootstrap/esm/Card"
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const AboutUsPage = () => {

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg text-center" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <h5 className="text-muted mb-4">Desarrollador Autónomo</h5>
          <p>
            Soy desarrollador con experiencia en backend y frontend. Me apasiona
            crear soluciones prácticas, eficientes y modernas.
          </p>
          <div className="d-flex justify-content-around mt-4">
            <Button
              variant="primary"
              href="https://github.com/ernestosalonso2023"
              target="_blank"
            >
              <FaLinkedin className="me-2" />
              LinkedIn
            </Button>

            <Button variant="outline-success" href="tel:+5355555555">
              <FaPhoneAlt className="me-2" />
              Llamar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
      
    
  );
};
export default AboutUsPage;