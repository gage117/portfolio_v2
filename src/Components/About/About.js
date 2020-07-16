import React from 'react';
import headshot from '../../Images/Headshot_cropped.jpg';

function About() {
	return (
		<section id="About" data-aos='fade-in'>
			<section className='bio'>
				<div className='intro-p-container'>
					<p className='intro'>Hi, my name is Gage!</p>
					<p className='intro-2'>{'I\'m'} a Full Stack Software Engineer specializing in <span>React</span>, <span>Node</span>, <span>Postgres</span>, and <span>Express</span>.</p>
				</div>
				<img src={headshot} className='headshot' alt='headshot' />
			</section>

			{/* Skills Section */}
			<section className='skills'>
				<p className='section-header'>Skills</p>
				<hr />
				<div className='skills-icons'>
					{
						//? Icons
						//? On hover or on click: expand icon, display text of technology name
					}
					Technology icons here, expand and show technology name on click or hover
				</div>
			</section>

			{/* What I Do Section */}
			<section className='what-i-do'>
				<p className='section-header'>What I Do</p>
				<hr />
				<article>
					React Development
				</article>
				<article>
					API Development
				</article>
				<article>
					Database Management
				</article>
			</section>
		</section>
	);
}

export default About;
