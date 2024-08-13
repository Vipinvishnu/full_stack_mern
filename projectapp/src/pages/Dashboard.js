import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Profile from '../components/Profile'
import Myprojects from '../components/Myprojects'
import Header from '../components/Header'


function Dashboard() {
    const [uname,setUname]=useState("")
        useEffect(()=>{
            if(localStorage.getItem("current_user")){
                setUname((JSON.parse(localStorage.getItem("current_user"))).userName)

            }
        },[])
        
    
    return (
        <div className='bg-light'>
            <Header dashboard></Header>
            <Row>
                <Col lg={8} >
                    <div className='py-5 px-3 mx-2 my-5 shadow bg-white'>
                        <h3 className='text-secondary'>Welcome <span className='text-dark'>{uname}</span></h3>
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