import { Container, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#!">Dynamic form</Navbar.Brand>
          <Navbar.Toggle>hello</Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as:{' '}
            <a href="#!" target="_blank" rel="noreferrer">Samuel Saravia 👨‍💻</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
