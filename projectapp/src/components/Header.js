import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';



function Header({ dashboard }) {
  return (
    <div >
      <Navbar className="bg-dark">
        <Container >
          <Navbar.Brand href="#home" className=' text-white'>
            <img
              alt=""
              src="https://i.postimg.cc/SsC0Fr6m/white-png-removebg-preview.png"
              width="50"
              height="50"
              className="d-inline-block align-top "
            />{' '}
            <span id='main' className='fs-2 ms-3' >Project Master</span>
          </Navbar.Brand>
          {dashboard &&

            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link href="#memes"> 
                <p className='text-danger fs-3'> Logout <i class="fa-solid fa-right-from-bracket pe-3 ps-1"></i></p>
              </Nav.Link>
            </Nav>
          }


        </Container>
      </Navbar>
    </div>
  )
}

export default Header