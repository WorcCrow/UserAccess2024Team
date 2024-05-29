import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../../../Images/salary-logo-reversed.svg";

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Salary.com logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Button
            variant="light btn-sm rounded-4"
            className="btn-right-0 text-blue fw-bold"
          >
            Sign out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
