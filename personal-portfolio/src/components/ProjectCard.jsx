import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, gitUrl, demoUrl }) => {
  // let requiredImgUrl =  imgUrl.replace(/['"]+/g, '');
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proj-imgbx__image" src={`/assets/img/${imgUrl}`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="project-btn">
        <a className='git' href={gitUrl} target={'_blank'}>
          <button className="code">Git</button>
        </a>
        <a className='git' href={demoUrl} target={'_blank'}>
          <button className="demo">Live Demo</button>
        </a>
      </div>
    </Col>
  )
}
