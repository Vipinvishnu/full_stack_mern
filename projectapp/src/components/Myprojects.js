import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Myprojects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Row className='mt-5'>
                <hr className='text-danger' />
                <Col lg={9}>
                    <h5> My Projects</h5>
                </Col>
                <Col lg={3}>
                    <Link onClick={handleShow} className='btn btn-danger w-100 rounded-pill'>Add Projects</Link>
                </Col>
            </Row>

            <div className='border mt-3 p-4 shadow'>
                <Row>
                    <Col lg={8}>
                        <p> Project Title</p>
                    </Col>
                    <Col lg={4} className='text-end'>
                        <Link className='text-end border-start border-end px-3 '><i class="fa-solid fa-pen-to-square text-dark fa-2x"></i></Link>
                        <Link className='text-end border-end px-3'><i class="fa-brands fa-github text-primary fa-2x"></i></Link>
                        <Link className='text-end px-3'><i class="fa-solid fa-trash text-danger fa-2x"></i></Link>

                    </Col>

                </Row>

            </div>
            <p className='text-danger mt-5 p-4'> No Projects Uploaded !</p>

            <Modal
                show={show}
                onHide={handleClose}
                centered
                size='lg'
                >

                <Modal.Header closeButton>
                    <Modal.Title><h3 className='text-danger'>Add The Project Details</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Row>

                    <Col>
                    <label htmlFor='img1' className='text-center'>
                            <input id='img1' style={{ display: 'none' }} type='file' />
                            <img className='mt-3 w-100 mb-3 '
                             src='https://i.postimg.cc/TY2wQkZv/img-removebg-preview.png' alt='' />
                        </label>
                    </Col>
                    <Col>
                       <input type='text' placeholder='Project Name'  className='form-control p-2 mt-3' style={{border:'none'}}  />
                       <hr/>
                       <input type='text' placeholder='Language Used'  className='form-control p-2 mt-3' style={{border:'none'}} />
                       <hr/>
                       <input type='text' placeholder='GitHub Link'  className='form-control p-2 mt-3' style={{border:'none'}} />
                       <hr/>
                       <input type='text' placeholder='Website Link'  className='form-control p-2 mt-3'  style={{border:'none'}}/>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    <textarea style={{border:'none'}} type='text' placeholder='Project Overview'  className='form-control p-2 mt-3 mb-5'  />
                    <hr/>
                    </Col>
                </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger " onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Myprojects