import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import colorSharp2 from '../assets/img/color-sharp2.png'
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import DATA from '../Data.json'



export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>List of personal projects</p>
                </div>}</TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills=tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {DATA.projects.firstTab.map((project, index) => {
                      return (
                      <ProjectCard key={index} {...project} />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {DATA.projects.secondTab.map((project, index) => {
                      return (
                      <ProjectCard key={index} {...project} />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {DATA.projects.thirdTab.map((project, index) => {
                      return (
                      <ProjectCard key={index} {...project} />
                      )
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}
