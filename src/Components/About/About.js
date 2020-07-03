import React from 'react';
import headshot from '../../Images/Headshot_cropped.jpg';
import './About.css';

function About() {
	return (
		<section id='About'>
			<p className='intro' data-aos='fade-in'>Hi, my name is Gage!</p>
			<p className='intro-2' data-aos='fade-in'>{'I\'m'} a Full Stack Software Engineer specializing in React, Node, Postgres, and Express.</p>
			<img src={headshot} className='headshot' alt='headshot' />
			<p className='skills-header'>Skills</p>
			<div className='skills-container' data-aos='fade-in'>
				{
					//? Icons
					//? On hover or on click: expand icon, display text of technology name
				}
			</div>
		</section>
	);
}

export default About;
