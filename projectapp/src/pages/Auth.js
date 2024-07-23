import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Auth({ register }) {

  const isRegisterForm = register ? true : false

  return (
    <div>
      <div className='w-50 container bg-light shadow-lg mb-5 p-5 mt-5 '  >

        <Row>
          <Col>
            <Link to={'/'} className='p-3 fs-5' style={{ textDecoration: 'none' }}> <i class="fa-solid fa-circle-arrow-left fa-beat" ></i> Back To Home</Link>
            <img className='w-100'
              src={isRegisterForm ? 'https://i.postimg.cc/PrnQZTvq/project2.jpg' : ' https://i.postimg.cc/8k0BKT6D/project1.webp '} alt=" " />

          </Col>
          <Col className='p-3 mt-4'>
            <h1 className='text-center'>
              {
                isRegisterForm ? 'Sign Up' : 'Sign In'
              }
            </h1>
            <div className='mt-5'>
              {
                isRegisterForm &&
                <FloatingLabel controlId="floatingPassword" label="User Name " className='mb-3'>
                  <Form.Control type="text" placeholder="User Name" />
                </FloatingLabel>
              }
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password " className='mb-3'>
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <div className='text-center mt-5'>
                {
                  isRegisterForm ?
                    <Button className='btn btn-dark rounded-pill px-4 py-2 '>Register</Button>
                    :
                    <Link to={'/dashboard'} className='btn btn-dark rounded-pill px-4 py-2'>Login</Link>

                }
                <div className='mt-3'>
                  {
                    isRegisterForm ?
                      <p>Already Have An Account? <Link to={'/login'} style={{ textDecoration: 'none' }}>Login Here</Link></p> :
                      <p>New User ? <Link to={'/register'} style={{ textDecoration: 'none' }}>Sign-Up Here</Link></p>
                  }
                </div>
              </div>

            </div>


          </Col>
        </Row>


      </div>

    </div>
  )
}

export default Auth