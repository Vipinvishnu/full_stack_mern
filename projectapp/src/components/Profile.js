import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Row>
                <Col>
                    <h4 className='text-primary'>
                        My Profile
                    </h4>
                </Col>
                <Col className='text-end'>
                    <div>
                        <i class="fa-solid fa-circle-check px-3 fa-2x text-success"></i>
                    </div>

                </Col>
            </Row>

            <div className='text-center'>
                <img className='mt-3 w-50 mb-3 rounded-end-pill' src='https://i.postimg.cc/QtHmmRPC/female.jpg' alt='' />
            </div>
            <Container>
                <hr className='text-primary' />
                <p className='py-3'> User Name</p>
                <hr className='text-primary' />
                <p className='py-3'>Github</p>
                <hr className='text-primary' />
                <p className='py-3'>LinkedIn</p>
                <hr className='text-primary' />

                <p className='text-end pt-5 '>
                    <span className='text-danger btn  px-4' onClick={handleShow}>Edit</span>
                </p>


                <Modal show={show}
                    onHide={handleClose}
                    backdrop='static'
                    size='md'
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='text-danger'>
                            <h4>Update Profile</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor='img1' className='text-center'>
                            <input id='img1' style={{ display: 'none' }} type='file' />
                            <img className='mt-3 w-50 mb-3 rounded-end-pill  ' src='https://i.postimg.cc/QtHmmRPC/female.jpg' alt='' />
                        </label>


                        <div className='mt-5'>
                            <input type='text' className='form-control' placeholder='Username ' />
                        </div>

                        <div className='mt-3 '>
                            <input type='text' className='form-control' placeholder='Github ' />
                        </div>

                        <div className='mt-3 mb-5'>
                            <input type='text' className='form-control' placeholder='LinkedIn ' />
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>


        </div>
    )
}

export default Profile