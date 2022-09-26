import "./Comp.css"
import logo from "../Assests/logon.png"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

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
              <Link to="/"><p>Home</p></Link>
              <Link to='/gall'><p >Gallery</p></Link>
              <Link to="/about"><p>About Us</p></Link>

              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>

            </Nav>

            {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a> */}
            <div className="headicon">
              <a href='https://www.facebook.com/jdelegantinteriors/' className='me-4 text-reset'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='https://www.youtube.com/channel/UC6a0rRO9B3AX-5cnGSHIgeQ' className='me-4 text-reset'>
                <i className='fab fa-youtube'></i>
              </a>
              <a href='https://www.google.com/search?client=opera-gx&q=jd%20interiors&sourceid=opera&ie=UTF-8&oe=UTF-8&hs=GYd&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZqduR3MdOKucZqSy4BcHVnzXChBg:1662553848119&rflfq=1&num=10&rldimm=17897028522918420754&lqi=CgxqZCBpbnRlcmlvcnNI1PLqwdm4gIAIWhYQABABGAAYASIMamQgaW50ZXJpb3JzkgERaW50ZXJpb3JfZGVzaWduZXI&ved=2ahUKEwiwxKXc14L6AhULSmwGHS-sAaoQvS56BAgXEAE&sa=X&rlst=f#rlfi=hd:;si:17897028522918420754,l,CgxqZCBpbnRlcmlvcnNI1PLqwdm4gIAIWhYQABABGAAYASIMamQgaW50ZXJpb3JzkgERaW50ZXJpb3JfZGVzaWduZXI;mv:[[32.6711021,89.3895221],[8.4432678,72.2562176]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2' className='me-4 text-reset'>
                <i className='fab fa-google'></i>
              </a>
              <a href='https://www.instagram.com/jdelegantinteriors/' className='me-4 text-reset'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}