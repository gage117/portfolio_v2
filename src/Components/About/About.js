import React from 'react';
import headshot from '../../Images/Headshot_cropped.jpg';

function About() {
	return (
		<section id='About' data-aos='fade-in'>
			<div className='bio'>
				<div>
					<p className='intro'>Hi, my name is Gage!</p>
					<p className='intro-2'>{'I\'m'} a Full Stack Software Engineer specializing in React, Node, Postgres, and Express.</p>
				</div>
				<img src={headshot} className='headshot' alt='headshot' />
			</div>
			<p className='skills-header'>Skills</p>
			<hr />
			<div className='skills'>
				{
					//? Icons
					//? On hover or on click: expand icon, display text of technology name
				}
				Technology icons here, expand and show technology name on click or hover
			</div>
		</section>
	);
}

export default About;
