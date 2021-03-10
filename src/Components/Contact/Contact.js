import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// Icons
import githubIcon from '../../Images/icons8-github.svg';
import linkedinIcon from '../../Images/icons8-linkedin.svg';
import gmailIcon from '../../Images/icons8-gmail.svg';

function Contact() {
	return (
		<ScrollAnimation animateIn='slideInUp' duration={0.4}>
			<footer id="Contact">
				<div id="contact-header">
					<p>Contact Me</p>
				</div>
				<div className="contact-links">
					<a href="https://github.com/gage117" rel='noopener noreferrer' target="_blank"><img src={githubIcon} alt="Github logo" /></a>
					<a href="https://www.linkedin.com/in/gage-eide/" rel='noopener noreferrer' target="_blank"><img src={linkedinIcon} alt="LinkedIn logo" /></a>
					<a href="mailto:gageeide@gmail.com" rel='noopener noreferrer' target="_blank"><img src={gmailIcon} alt="Gmail logo" /></a>
				</div>
				<p className="credit">Icons by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">icons8</a></p>
			</footer>
		</ScrollAnimation>
	);
}

export default Contact;
