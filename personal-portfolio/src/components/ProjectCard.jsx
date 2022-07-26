import { Col } from "react-bootstrap"
import projImg1 from '../assets/img/project-img1.png'


export const ProjectCard = ({title,description,imgUrl}) => {
  // let requiredImgUrl =  imgUrl.replace(/['"]+/g, '');
  return (
   <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
            <img className="proj-imgbx__image" src={`/assets/img/${imgUrl}`}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
   </Col>
  )
}
