
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter3 from '../assets/img/meter3.svg';
import meter2 from '../assets/img/meter2.svg';
import colorSharp from '../assets/img/color-sharp.png';
import DATA from '../Data.json'



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Front end Developer</p>
              <Carousel className="skill-slider" responsive={responsive} infinite={true}>
                {DATA.projects.skills.map((project, index) => {
                  return (
                    <div key={index} className="item">
                      <img src={`/assets/img/${project.imgUrl}`} alt="Image" />
                      <h5>{project.title}</h5>
                    </div>
                  )
                })}
              </Carousel>
            </div></Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="colorSharp" className="background-image-left" />
    </section>
  )
}
