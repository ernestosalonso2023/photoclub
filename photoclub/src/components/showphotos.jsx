import Container from "react-bootstrap/esm/Container";
import ContactPage from "./contactpage";
import CardBody from "react-bootstrap/esm/CardBody";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const ShowPhotos = ({ src, size = "4x6" }) => {
  const sizes = {
    "4x6": { width: 384, height: 576 },
    "5x7": { width: 480, height: 672 },
  };
  const dim = sizes[size] || sizes["4x6"];
  console.log(src);
  return (
    <Container style={{display: "flex", justifyContent: "flex-center"}}>
      <Row>
        <Col>
      <div
        style={{
          width: `${dim.width}px`,
          height: `${dim.height}px`,
          overflow: "hidden",
          display: "flex", 
          justifyContent: "center"
        }}
      >
          <img
            src={src}
            alt="foto"
            style={{
               width: `${dim.width}px`,
               height: `${dim.height}px`,
               display: "block",
               margin: "0 auto",
               objectFit: "contain",
            }}
          />
      </div>
      </Col>
      <Col>
      <div>
         <a href={src} download>
           <Button variant="dark" size="lg">Descargar imagen</Button>
          </a>
      </div>
</Col>
</Row>
    </Container>
  );
};

export default ShowPhotos;
