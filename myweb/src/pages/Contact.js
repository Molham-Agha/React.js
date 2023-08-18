import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../compontents/Footer";
import Header from "../compontents/Header";
import { Helmet } from 'react-helmet-async';


const Contact = () => {
  const form = useRef();
  const [formcontent , setFormcontent]=useState({
    name:"",
    email:"",
    text:""
  })

  const sendEmail = (e) => {
    e.preventDefault();
      setFormcontent(form.current)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setFormcontent({
            name:"",
            email:"",
            text:""
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
   <>
      <Helmet>
        <title>Contact page</title>
      </Helmet>
      <Header />
      <div className="contact">
        <div className="container">
          <div className="location">
            <div className="contact-info">
              <h3>Call me</h3>
              <span>+201112793199</span>
            </div>
            <div className="contact-info">
              <h3>Email me</h3>
              <span>molhamagha0@gmail.com</span>
            </div>
            <div className="contact-info">
              <h3>Location</h3>
              <span>Egypt-cairo</span>
            </div>
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input className="contact_input" type="text" name="user_name" placeholder="Name" value={formcontent.name} onChange={(e) => setFormcontent({...formcontent , name:e.target.value})}/>
            <input className="contact_input" type="email" name="user_email" placeholder="Email" value={formcontent.email}onChange={(e) => setFormcontent({...formcontent , email:e.target.value})}/>
            <textarea className="contact_input" name="message" cols={0} rows={10} placeholder="Type me your queries" value={formcontent.text} onChange={(e) => setFormcontent({...formcontent , text:e.target.value})}/>
            <input className="button" type="submit" value="Send" />
          </form>
        </div>
     </div>
      <Footer />  
   </>
  );
};


export default Contact;






