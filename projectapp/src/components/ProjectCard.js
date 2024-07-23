import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link2 } from 'react-feather';



function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card onClick={handleShow} style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.postimg.cc/W1MkCdMV/project3.png" />
        <Card.Body>
          <Card.Title><h5 className='text-center'>Project Name</h5></Card.Title>

        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3 className='text-primary'>Project Name</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className='p-3'>
            <Col>
              <img className='w-100 ' src="https://i.postimg.cc/W1MkCdMV/project3.png" alt="" />
              <p className='p-4'><span className='text-danger'>Technologies : </span> Html,CSS,React</p>

            </Col>
            <Col>
              <p><span className='text-danger'> Project Description</span> : <br/>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
          <hr></hr>

          <div className='p-3'>
            <Link>
              <i class="fa-solid fa-link  fa-2x "></i>
            </Link>
            <Link>
              <i class="fa-brands fa-github fa-beat-fade fa-2x mx-3"></i>
            </Link>

          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default ProjectCard