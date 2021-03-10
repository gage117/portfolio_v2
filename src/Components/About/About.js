import React from 'react';
import headshot from '../../Images/Headshot_cropped.jpg';

// Icons
import designIcon from '../../Images/icons8-web-design-64.png';
import apiIcon from '../../Images/icons8-rest-api-64.png';
import databaseIcon from '../../Images/icons8-database-64.png';

function About() {
	return (
		<section id="About" data-aos='fade-in'>
			<section className='bio'>
				<div className='intro-p-container'>
					<p className='intro'>Hi, my name is Gage!</p>
					<p className='intro-2'>{'I\'m'} a Full Stack Software Engineer specializing in <span>React</span>, <span>Node</span>, <span>Postgres</span>, and <span>Express</span>.</p>
					<p className='intro'>Based in St Paul Minnesota's 8 months of winter and 4 months of scorching hot not-winter; I'm an avid mountain biker and bike tinkerer, sim racer, and VR enthusiast who loves keeping up with the latest news and tech!</p>
				</div>
				<img src={headshot} className='headshot' alt='headshot' />
			</section>

			{/* What I Do Section */}
			<section className='what-i-do'>
				<p className='section-header'>What I Do</p>
				<hr />
				<article>
					<section className='wid-header'>
						<img src={designIcon} alt='react' />
						<span>Front End Development</span>
					</section>
					<p className='wid-text'>Need help building or designing a website? I design sleek and accessible sites using <a href='https://www.figma.com/' target='blank' rel='noopener noreferrer'>Figma</a>, and can redesign old websites to bring a new look to it. I can build these sites in anything from my favorite framework <a href='https://reactjs.org/' target='blank' rel='noopener noreferrer'>React</a> to simple HTML depending on complexity.</p>
				</article>
				<article>
					<section className='wid-header'>
						<img src={apiIcon} alt='api' />
						<span>Back End Development</span>
					</section>
					<p className='wid-text'>I have a knack for building APIs, and love doing it too. I primarily work with <a href='https://nodejs.org/en/' target='blank' rel='noopener noreferrer'>Node</a> and <a href='https://expressjs.com/' target='blank' rel='noopener noreferrer'>Express</a> for building the API and have proficient experience deploying with <a href='https://www.heroku.com/' target='blank' rel='noopener noreferrer'>Heroku</a>.</p>
				</article>
				<article>
					<section className='wid-header'>
						<img src={databaseIcon} alt='databases' />
						<span>Database Design</span>
					</section>
					<p className='wid-text'>Experienced with both <a href='https://www.postgresql.org/' target='blank' rel='noopener noreferrer'>Postgres</a> and <a href='https://www.mongodb.com/' target='blank' rel='noopener noreferrer'>MongoDB</a>, I have flexibility to build and work with both, giving me the ability to go appropriately with a relational or non-relational database depending on the needs of the projects and not which one I was trained in.</p>
				</article>
			</section>
		</section>
	);
}

export default About;
