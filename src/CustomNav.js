import { Container, Navbar } from 'react-bootstrap';

function CustomNav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Education Program</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Burak Ateştepe</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;