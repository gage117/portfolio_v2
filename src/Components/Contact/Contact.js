import React from 'react';
import './Contact.css';

function Contact() {
	return (
		<footer>
			<div id="contact-links">
				<p>Contact Links</p>
			</div>
			<div className="contact-info">
				<a href="https://github.com/gage117" rel='noopener noreferrer' target="_blank"><img src="src\Images\github-height100px.png" alt="Github logo" /></a>
				<a href="https://www.linkedin.com/in/gage-eide/" rel='noopener noreferrer' target="_blank"><img src="images/linkedin-height100px.png" alt="LinkedIn logo" /></a>
				<a href="mailto:gageeide@gmail.com" rel='noopener noreferrer' target="_blank"><img src="images/gmail-height100px.png" alt="email logo" /></a>
			</div>
		</footer>
	);
}

export default Contact;
