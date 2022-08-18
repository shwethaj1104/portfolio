import { Col, Container, Row } from "react-bootstrap"
import {BsLinkedin,BsGithub} from 'react-icons/bs'


export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href='https://github.com/shwethaj1104/' target={'_blank'}><BsGithub className='svg_icons'/></a>
                            <a href='https://www.linkedin.com/in/shwetha-j-b26883159/' target={'_blank'}><BsLinkedin className='svg_icons'/></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>   
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
