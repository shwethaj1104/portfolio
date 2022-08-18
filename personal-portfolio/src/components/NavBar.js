import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import {BsLinkedin,BsGithub} from 'react-icons/bs'



export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home')
    const[scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll',onScroll)
        return ()=> window.removeEventListener('scroll',onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src={logo} alt='' /> */}
                    {/* <img src="/assets/img/my-self.png" alt='' /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                   <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link vvd' : 'navbar-link vvd'} onClick={()=>onUpdateActiveLink('connect')}>Let's Connect</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://github.com/shwethaj1104/' target={'_blank'}><BsGithub className='svg_icons'/></a>
                            <a href='https://www.linkedin.com/in/shwetha-j-b26883159/' target={'_blank'}><BsLinkedin className='svg_icons'/></a>
                            {/* <a href='https://www.linkedin.com/in/shwetha-j-b26883159/' target={'_blank'}><img src={navIcon1} alt=''/></a> */}
                            {/* <a href='#'><img src={navIcon2} alt=''/></a> */}
                            {/* <a className='git' href='https://github.com/shwethaj1104/' target={'_blank'}>
                                <span>Git</span>
                            </a> */}

                        </div>
                        {/* <button className='vgvd' onClick={()=> console.log('connect')}>
                            <span>Let's Connect</span>
                        </button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
