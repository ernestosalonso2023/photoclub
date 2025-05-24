import Container from "react-bootstrap/esm/Container";

const FooterPage=()=> {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-1">© 2025 Ernesto Sarduy. Todos los derechos reservados.</p>
        <p className="mb-0">
          Contacto: <a href="mailto:ernesto@email.com" className="text-info">ernestosalonso2023@gmail.com</a> |{" "}
          <a href="https://github.com/ernestosalonso2023" className="text-info" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default FooterPage;