import React from 'react';
// Icons
import githubIcon from '../../Images/icons8-github.svg';
import linkedinIcon from '../../Images/icons8-linkedin-64.png';
import gmailIcon from '../../Images/icons8-gmail-64.png';

function Contact() {
	return (
		<footer id="Contact">
			<div id="contact-header">
				<p>Contact Me</p>
			</div>
			<div className="contact-links">
				<a href="https://github.com/gage117" rel='noopener noreferrer' target="_blank"><img src={githubIcon} alt="Github logo" /></a>
				<a href="https://www.linkedin.com/in/gage-eide/" rel='noopener noreferrer' target="_blank"><img src={linkedinIcon} alt="LinkedIn logo" /></a>
				<a href="mailto:gageeide@gmail.com" rel='noopener noreferrer' target="_blank"><img src={gmailIcon} alt="Gmail logo" /></a>
			</div>
		</footer>
	);
}

export default Contact;
