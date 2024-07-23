import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
    return (
        <div id="secl">
            <Header></Header>
            <Row className="p-5 pb-5">
                <Col className="text-center p-5">
                    <h1 id="h1" className="mt-5">
                        Project Master
                    </h1>
                    <p className="mt-5  w-75 container ">
                        One Stop Destination For All Software Development Projects. Where
                        User Can Add And Manage Their Projects.As Well As Access All
                        Projects Available In Our Website.What Are You Waiting For !
                    </p>
                    <Link
                        to={"/login"}
                        className=" text-info mt-5 btn btn-outline-dark  rounded-pill w-25 px-5 border border-dark"
                    >
                        <i class="fa-solid fa-arrow-left fa-fade "></i>{" "}
                        <strong>start</strong>
                        <i class="fa-solid fa-arrow-right fa-fade"></i>
                    </Link>
                </Col>

                <Col>
                    <img
                        className="w-75 mt -5 "
                        src="https://i.postimg.cc/bwB7hVHx/project1.webp"
                        alt=""
                    />
                </Col>
            </Row>
            <div id="sec2" className="mt-4 p-5 ">
                <h1 className="text-center mb-5">
                    <strong>Explore Projects</strong>
                </h1>

                <Container>
                    <marquee scrollAmount={25}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <ProjectCard></ProjectCard>
                            </div>
                            <div>
                                <ProjectCard></ProjectCard>
                            </div>
                            <div>
                                <ProjectCard></ProjectCard>
                            </div>
                        </div>
                    </marquee>
                </Container>

                <div className="text-center m-5">
                    <Link
                        to={"/projects"}
                        style={{ textDecoration: "none", color: "black " }}
                    >
                        View More Projects
                        <i class="fa-solid text-dark fa-arrow-right fa-beat-fade ms-3 "></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
