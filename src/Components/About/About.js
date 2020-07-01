import React from 'react';
import headshot from '../../Images/Headshot_cropped.jpg';
import './About.css';

function About() {
	return (
		<section id='About'>
			<p className='intro' data-aos='fade-in'>Hi, my name is Gage!</p>
			<p className='intro-2' data-aos='fade-in'>{'I\'m'} a Full Stack Software Engineer specializing in React, Node, Postgres, and Express.</p>
			<img src={headshot} className='headshot' alt='headshot' />
			<div className='skills' data-aos='fade-in'>
				
			</div>
		</section>
	);
}

export default About;
