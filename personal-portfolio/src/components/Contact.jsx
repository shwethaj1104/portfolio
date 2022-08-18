import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log("form",formDetails)
        if(formDetails.email && formDetails.message){
          setButtonText('Sending...')
          emailjs.sendForm('service_a3gfvee', 'template_njg1san', form.current, 'HmzkIsNtHj0JIc_53')
            .then((result) => {
                console.log(result.text);
                setFormDetails(formInitialDetails)
                setButtonText('Send')
            }, (error) => {
                console.log(error.text);
            });
      }
      else{
                setStatus({success:false,message:'! Email and Message is mandatory, Please fill both of them'})
                setTimeout(() => {
                setStatus({success:true,message:''})
                }, 3000);
      }
  
    };
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails,setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText] = useState('Send');
    const [status,setStatus] = useState({})

    const onFormUpdate = (category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    // const handleSubmit = async(e)=>{
    //     e.preventDefault();
    //     setButtonText('Sending...')
    //     let response = await fetch("http://localhost:5000/contact",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result = response.json();
    //     setFormDetails(formInitialDetails);
    //     if(result.code === 200){
    //         setStatus({success:true,message:'Message Sent Successfully'})
    //     }else{
    //         setStatus({success:false,message:"Something went wrong, please try again later"})
    //     }
    // }



  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                <img src={contactImg} />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <Row className="contact-row">
                            <Col sm={6} className="px-1">
                                <input type="text" name="name" value={formDetails.firstName} placeholder="Name" onChange={(e)=> onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            {/* <Col sm={6} className="px-1">
                                <input type="text" name="last_name" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName',e.target.value)}/>
                            </Col> */}
                            <Col sm={6} className="px-1">
                                <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=> onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone Number" onChange={(e)=> onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <textarea name="message" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)}/>
                                <button className="px-1__button" type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
