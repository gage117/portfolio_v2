import React from 'react';
// Icons
import githubIcon from '../../Images/github.png';
import linkedinIcon from '../../Images/linkedin.png';
import gmailIcon from '../../Images/gmail.png';

function Contact() {
	return (
		<footer>
			<div id="contact-links">
				<p>Contact Me</p>
			</div>
			<div className="contact-info">
				<a href="https://github.com/gage117" rel='noopener noreferrer' target="_blank"><img src={githubIcon} alt="Github logo" /></a>
				<a href="https://www.linkedin.com/in/gage-eide/" rel='noopener noreferrer' target="_blank"><img src={linkedinIcon} alt="LinkedIn logo" /></a>
				<a href="mailto:gageeide@gmail.com" rel='noopener noreferrer' target="_blank"><img src={gmailIcon} alt="Gmail logo" /></a>
			</div>
		</footer>
	);
}

export default Contact;
