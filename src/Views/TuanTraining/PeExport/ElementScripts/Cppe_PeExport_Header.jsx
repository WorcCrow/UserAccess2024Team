import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../../../Styles/ElementStyles/TuanTraining/PeExport/Cpas_TuanTraining_PeExport _Header.scss";
import logo from "../../../../Images/salary-logo-reversed.svg";

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Salary.com logo" className="logo" />
        </Navbar.Brand>
        <div className="d-flex align-items-center d-lg-none">
          <Button
            variant="light"
            className="rounded-circle navbar-pic bg-success text-white d-flex align-items-center justify-content-center fw-bold"
          >
            TL
          </Button>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 p-0"
          >
            <span className="icon-sa-triangle-down text-white text-size16"></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button
            variant="light btn-sm rounded-4"
            className="btn-right-0 text-blue fw-bold me-3"
          >
            Sign out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
