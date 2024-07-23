import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Mail, Phone } from 'react-feather'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-secondary text-white mt-5 p-5   '>
      <Row>
        <Col style={{color:'black'}}>
          <h3 className='mb-4'>Project Master</h3>
          <p>Completely Free App To Manage All Software Projects</p>
          <p> For Any Query <Mail className='ms-2 me-2'></Mail> contact@projectfair.com</p>
        </Col>
        <Col>
          <div className='ms-5'>
            <h3 style={{color:'black'}}>Links</h3>
            <Link style={{ textDecoration: 'none ', color: 'black' }}>Home</Link> <br />
            <Link style={{ textDecoration: 'none', color: 'black' }}>Login</Link> <br />
            <Link style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link> <br />

          </div>
        </Col>
        <Col>
          <div className='ms-5' >
            <h3 style={{color:'black'}}>Guides</h3>
            <p style={{color:'black'}}>React</p>
            <p style={{color:'black'}}>React Bootstrap</p>
            <p style={{color:'black'}}>Routing</p>
          </div>
        </Col>

        <Col style={{color:'black'}}>
          <h3> <Phone></Phone>Contact Us </h3>
          <input type='email' placeholder='enter mail' className='form-control mt-3' />
          <div className='mt-3'>
            <Button className='btn btn-light' >Send </Button>
            <i class="fa-brands fa-github fa-2x ms-5"></i>
            <i class="fa-brands fa-linkedin fa-2x ms-3"></i>
            <i class="fa-brands fa-twitter fa-2x ms-3"></i>
            <i class="fa-brands fa-facebook fa-2x ms-3"></i>
            <i class="fa-brands fa-instagram fa-2x ms-3"></i>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer