import Container from "react-bootstrap/esm/Container";

const FooterPage=()=> {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-1">© 2025 Ernesto Sarduy. Todos los derechos reservados.</p>
        <p className="mb-0">
          Contacto: <a href="mailto:ernestosalonso2023@gmail.com" className="text-info">correo electrónico</a> |{" "}
          <a href="www.linkedin.com/in/ernestosarduyalonso" className="text-info" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default FooterPage;