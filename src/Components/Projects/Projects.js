import React from 'react';
import Project from './Project';
import projectList from './Project-list';

function Projects() {
	return (
		<section id='Projects'>
			<p className='projects-header'>Latest Projects</p>
			<hr />
			{projectList.map((project, index) => <Project key={index} project={project} />)}
		</section>
	);
}

export default Projects;
