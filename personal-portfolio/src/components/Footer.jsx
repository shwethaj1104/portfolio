import { Col, Container, Row } from "react-bootstrap"
import { MailChimpForm } from "./MailChimpForm"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <MailChimpForm />
                <Col sm={6}>
                {/* <img src={logo} /> */}
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        {/* <a href=""><img src={navIcon1} /></a>
                        <a href=""><img src={navIcon2} /></a>
                        <a href=""><img src={navIcon3} /></a> */}
                        <a href='https://www.linkedin.com/in/shwetha-j-b26883159/' target={'_blank'}><img src={navIcon1} alt=''/></a>
                        <a className='git' href='https://github.com/shwethaj1104/' target={'_blank'}>
                        <span>Git</span>
                        </a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>   
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
