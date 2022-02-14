import React, { useEffect } from 'react';
import './Contact.css';

function Contact(props) {

  useEffect(() => {
    props.changeTitle(window.location.pathname)
  },[props])


  return (
    <div>
        <h1>Contact</h1>
    </div>
  );
}

export default Contact;