import "./Comp.css"
import logo from "../Assests/logon.png"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';

export default function Head() {
  return (
    <>
      <div className="top">
        <img src={logo} width="200px" />
      </div>
      <Navbar expand="lg" className='head' >

        <Container fluid="xxl">
          {/* <Navbar.Brand href="/">
          <img src={logo} height="100px" />
        </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gall">Gallery</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}