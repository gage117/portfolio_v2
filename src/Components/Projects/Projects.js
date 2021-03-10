import React from 'react';
import Project from './Project';
import projectList from './Project-list';
import ScrollAnimation from 'react-animate-on-scroll';

function Projects() {
	return (
		<section id='Projects'>
			<p className='projects-header'>Latest Projects</p>
			<hr />
			{projectList.map((project, index) => {
				return (
					<ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={0.75} initiallyVisible={true} key={index}>
						<Project key={index} project={project} />
					</ScrollAnimation>
				)
			})}
		</section>
	);
}

export default Projects;
