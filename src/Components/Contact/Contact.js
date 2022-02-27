import React, { useEffect } from 'react';
import './Contact.css';

function Contact(props) {

  useEffect(() => {
    props.changeTitle(window.location.pathname)
  },[props])


  return (
    <div className="itemBContainerContact">
      <p className="contactParagraph"><strong>Cell:</strong> 207-699-8867</p>
      <p className="contactParagraph"><strong>Work Email:</strong> william.nash@zenithmedia.com</p>
      <p className="contactParagraph"><strong>Civilian Email:</strong> williamwildernash@gmail.com</p>
      <p className="contactParagraph"><strong>Instagram:</strong> williamwildernash</p>
      <p className="contactParagraph"><strong>Callsign:</strong> Shrew</p>
      <p className="contactParagraph"><strong>AIM Screen Name:</strong> uunash007 (deprecated)</p>

    </div>
  );
}

export default Contact;