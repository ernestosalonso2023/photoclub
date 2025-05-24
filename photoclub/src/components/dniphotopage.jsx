import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { FaUpload } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import template from "../assets/plantilla_vacia_dni.png";
import p4x6_0 from "../assets/templates/dni/p4x6-0.png";
import p4x6_1 from "../assets/templates/dni/p4x6-1.png";
import p4x6_2 from "../assets/templates/dni/p4x6-2.png";
import p4x6_3 from "../assets/templates/dni/p4x6-3.png";
import p4x6_4 from "../assets/templates/dni/p4x6-4.png";
import p4x6_5 from "../assets/templates/dni/p4x6-5.png";
import p4x6_6 from "../assets/templates/dni/p4x6-6.png";
import p4x6_7 from "../assets/templates/dni/p4x6-7.png";
import p4x6_8 from "../assets/templates/dni/p4x6-8.png";
import p4x6_9 from "../assets/templates/dni/p4x6-9.png";
import p4x6_10 from "../assets/templates/dni/p4x6-10.png";
import p4x6_11 from "../assets/templates/dni/p4x6-11.png";
import p4x6_12 from "../assets/templates/dni/p4x6-12.png";

const p4x6Images = {
  "0": p4x6_0,
  "1": p4x6_1,
  "2": p4x6_2,
  "3": p4x6_3,
  "4": p4x6_4,
  "5": p4x6_5,
  "6": p4x6_6,
  "7": p4x6_7,
  "8": p4x6_8,
  "9": p4x6_9,
  "10":p4x6_10,
  "11":p4x6_11,
  "12":p4x6_12
};

const FormDni = () => {
  const [count, setCount] = useState(1);
  
  const HandleChangeCount = (event) => {
    //console.log(event.target.value);
    setCount(event.target.value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Row xs="auto" className="justify-content-center">
          <Col>
            <Image
              src={p4x6Images[count] || p4x6_1}
              style={{ height: "200px", objectFit: "cover" }}
            ></Image>
          </Col>
        </Row>
      <Row xs="auto" className="justify-content-center">
        <Col>
        <div style={{style:"text-align:start"}}>Cantidad de fotos</div>
        <input value={count} type="number"  min="1" max="12" step="1" style={{width:"60px"}} onChange={HandleChangeCount} />
         </Col>
        <Col>
        <div style={{style:"text-align:start"}}>Tipo plantilla</div>
         <Form.Select size="sm">
        <option>4x6</option>
        <option>5x7</option>
      </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
        <br></br>
         <div className="d-flex justify-content-around mt-2">
             <Button variant="dark" style={{ width: "400px", height: "80px"}}><h4>Comenzar</h4></Button>
         </div>
        
        </Col>
        
      </Row>
  </Form.Group>
  </div>

 )  
 }
      

const DniPhotoPage = () => {
  const [image, setImage] = useState(template);
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  return (
    
      
      <Container className="d-flex justify-content-center align-items-center min-vh-20">
        <Card
          className="p-4 shadow-lg text-center"
          style={{ maxWidth: "900px" }}
        >
          <Card.Body>
            <h1 className="mb-1">Fotos para DNI</h1>
            <h4 className="mb-4">(26x32 mm)</h4>
            <Row>
              <Col md={6}>
               <Image
              src={image}
              style={{ height: "200px", objectFit: "cover" }}
            ></Image>
            <p>
              Limpiamos el fondo, colocamos el fondo blanco, analizamos si tu
              foto es correcta. Los hacemos todo por ti.
            </p>
            <div className="d-flex justify-content-around mt-2 mb-4">
              <Button
                variant="dark"
                onClick={handleButtonClick}
                style={{ width: "400px", height: "80px" }}
              >
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <FaUpload className="me-2" />
                <h4>Selecciona una Imagen</h4>
              </Button>
            </div>
              </Col>
              <Col md={6}>
               { (image!=template) && <FormDni></FormDni> }
              </Col>
            </Row>
           
          </Card.Body>
        </Card>
      </Container>
      
  );
};

export default DniPhotoPage;
