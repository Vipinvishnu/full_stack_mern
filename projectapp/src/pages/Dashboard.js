import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Profile from '../components/Profile'
import Myprojects from '../components/Myprojects'
import Header from '../components/Header'


function Dashboard() {
    return (
        <div className='bg-light'>
            <Header dashboard></Header>
            <Row>
                <Col lg={8} >
                    <div className='py-5 px-3 mx-2 my-5 shadow bg-white'>
                        <h3>Welcome <span className='text-danger'>User</span></h3>
                        <Myprojects></Myprojects>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='py-5 px-3 mx-2 my-5 shadow bg-white'>
                        <Profile></Profile>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard