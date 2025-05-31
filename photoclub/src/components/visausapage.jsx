import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import PhotoService from "../services/photos";
import ModalInfoProcess from "./modalinfoprocess";
import ShowPhotos from "./showphotos";
import Form from "react-bootstrap/Form";
import {FaUpload } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import template from "../assets/templates/visausa/plantilla_vacia.png";
import p4x6_0 from "../assets/templates/visausa/p4x6-0.png";
import p4x6_1 from "../assets/templates/visausa/p4x6-1.png";
import p4x6_2 from "../assets/templates/visausa/p4x6-2.png";
import p4x6_3 from "../assets/templates/visausa/p4x6-3.png";
import p4x6_4 from "../assets/templates/visausa/p4x6-4.png";
import p4x6_5 from "../assets/templates/visausa/p4x6-5.png";
import p4x6_6 from "../assets/templates/visausa/p4x6-6.png";
import p5x7_1 from "../assets/templates/visausa/p5x7-1.png";
import p5x7_2 from "../assets/templates/visausa/p5x7-2.png";
import p5x7_3 from "../assets/templates/visausa/p5x7-3.png";
import p5x7_4 from "../assets/templates/visausa/p5x7-4.png";
import p5x7_5 from "../assets/templates/visausa/p5x7-5.png";
import p5x7_6 from "../assets/templates/visausa/p5x7-6.png";

const p4x6Images = {
  "0": p4x6_0,
  "1": p4x6_1,
  "2": p4x6_2,
  "3": p4x6_3,
  "4": p4x6_4,
  "5": p4x6_5,
  "6": p4x6_6
 
};
const p5x7Images = {
  1: p5x7_1,
  2: p5x7_2,
  3: p5x7_3,
  4: p5x7_4,
  5: p5x7_5,
  6: p5x7_6,
 };

const FormVisaUsa = ({ filename, setPhotos,fname,setFname,selectedOption,setSelectedOption}) => {
 const [count, setCount] = useState(1);
  const [imagenUrl, setImageUrl] = useState(null);
  //const [selectedOption, setSelectedOption] = useState("4x6");
  const [modalShow, setModalShow] = useState(false);

  const HandleChangeSelect=(event)=> {
   setSelectedOption(event.target.value);
  // console.log(event.target.value)
  }

  const HandleChangeCount = (event) => {
    setCount(event.target.value);
  };
  const HandleBeginButton = () => {
    setModalShow(true);
    PhotoService.getPhotos(filename, "usa@pas",selectedOption, count).then(
      (response) => {
        const url = URL.createObjectURL(response.data); // 👈 Convertir blob en URL
        setImageUrl(url);
        setPhotos(true);
        setFname(url);
      }
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
    { !modalShow && <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Row xs="auto" className="justify-content-center">
          <Col>
            <Image
              src={selectedOption==="4x6"?(p4x6Images[count] || p4x6_1):(p5x7Images[count] || p5x7_1)}
              style={{ height: "200px", objectFit: "cover" }}
            ></Image>
            {imagenUrl && ( 
               <Image
                src={imagenUrl}
                style={{ height: "200px", objectFit: "cover" }}
              ></Image>
            )}
          </Col>
        </Row>
        <Row xs="auto" className="justify-content-center">
          <Col>
            <div style={{ style: "text-align:start" }}>Cantidad de fotos</div>
            <input
              value={count}
              type="number"
              min="1"
              max="6"
              step="1"
              style={{ width: "60px" }}
              onChange={HandleChangeCount}
            />
          </Col>
          <Col>
            <div style={{ style: "text-align:start" }}>Tipo plantilla</div>
            <Form.Select size="sm" onChange={HandleChangeSelect} value={selectedOption}>
              <option>4x6</option>
              <option>5x7</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <div className="d-flex justify-content-around mt-2">
              <Button
                variant="dark"
                onClick={HandleBeginButton}
                style={{ width: "400px", height: "80px" }}
              > <h4>Comenzar</h4>
              </Button>
            </div>
          </Col>
        </Row>
      </Form.Group> }
      {modalShow && (
        <ModalInfoProcess
          show={modalShow}
          onHide={() => setModalShow(false)}
          title="Procesando su Imagen"
          body="Estamos procesando tu imagen, por favor espera..."
        />
      )}
     </div>
  );
   
 }
const VisaUsaPage = () => {
 const [image, setImage] = useState(template); //Image as URL
  const [filename, setFileName] = useState(null);
  const [fname, setFname] = useState(null); // Url del fichero imagen ya transformado
  const [showphotos, setPhotos] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("4x6");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("img", file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      try {
        setModalShow(true);
        PhotoService.uploadPhoto(formData).then((response) => {
          setFileName(response.data);
          setModalShow(false);
          //console.log(response.data);
        });
      } catch (error) {
        console.log("Bad request", error);
      }
    }
  };
  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <>
      {!showphotos && (
        <Container className="d-flex justify-content-center align-items-center min-vh-20">
          <Card
            className="p-4 shadow-lg text-center"
            style={{ maxWidth: "900px" }}
          >
            <Card.Body>
              <h1 className="mb-1">Fotos para Visa EEUU</h1>
              <h4 className="mb-4">(51x51 mm)</h4>
              <Row>
                <Col md={6}>
                  <Image
                    src={image}
                    style={{ height: "200px", objectFit: "cover" }}
                  ></Image>
                  <p>
                    Quitamos el fondo, colocamos el fondo blanco, analizamos si
                    tu foto es correcta. Los hacemos todo por ti.
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
                  {image != template && (
                    <FormVisaUsa
                      filename={filename}
                      setPhotos={setPhotos}
                      fname={fname}
                      setFname={setFname}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                    ></FormVisaUsa>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      )}
      {showphotos && <ShowPhotos src={fname} size={selectedOption}></ShowPhotos>}
      {modalShow && (
        <ModalInfoProcess
          show={modalShow}
          onHide={() => setModalShow(false)}
          title="Subiendo Imagen"
          body="Cargando su imagen al servidor, por favor espera..."
          style={{ textAlign: "center" }}
        />
      )}
    </>
  );
  
};

export default VisaUsaPage