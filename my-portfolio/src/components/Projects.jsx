import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
    
    const projects = [
        {title: "Tenant Safe",
         description: "Eviction-prevention web application with Google Maps API integration, Chat-box feature for the community board, and an FAQ hub.",
         imgUrl: projImg1,
         projectUrl: "https://hackathon-team10tkh2023.vercel.app/home",
        },
        {title: "BodeGo",
         description: "Online shopping platform centered on Bodegas in NYC, driven to make local businesses and their products more accessible to those even beyond the neighborhood. Incorporates Google Maps API, shopping cart/checkout payment functionalities, and products each store provides. The map helps locate bodegas around the area, their distance from the user's location, and business hours/services.",
         imgUrl: projImg2,
         projectUrl: "https://tkh-capstone-group-4.vercel.app/",
        },
        {title: "Anime Giphy",
         description: "Anime generator that has a sorted array of gifs based on emotions. It populates various GIFS through the search button.",
         imgUrl: projImg3,
         projectUrl: "https://github.com/Dianav21/API-Project/tree/master",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                <Col size={12}>
                        <h2>Projects</h2>
                        <p>Featured Applications</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">1st</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">2nd</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">3rd</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                          <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <p>Upcoming</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <p>Upcoming</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )    
}