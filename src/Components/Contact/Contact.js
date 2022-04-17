import React, { useEffect } from 'react';
import './Contact.css';

function Contact(props) {

  useEffect(() => {
    props.changeTitle(window.location.pathname)
  },[props])


  return (
    <div className="itemBContainerContact">
      <p className="contactParagraph"><strong>Cell:</strong> 207-699-8867</p>
      <p className="contactParagraph"><strong>Work Email:</strong> <a href={"mailto:william.nash@zenithmedia.com"}>william.nash@zenithmedia.com</a></p>
      <p className="contactParagraph"><strong>Civilian Email:</strong> <a href={"mailto:williamwildernash@gmail.com"}>williamwildernash@gmail.com</a></p>
      <p className="contactParagraph"><strong>Instagram:</strong> williamwildernash</p>
      <p className="contactParagraph"><strong>Callsign:</strong> Shrew</p>
      <p className="contactParagraph"><strong>GitHub:</strong> <a href={"https://github.com/coxn1446"}>https://github.com/coxn1446</a></p>
      <p className="contactParagraph"><strong>AIM Screen Name:</strong> uunash007 (deprecated)</p>
    </div>
  );
}

export default Contact;