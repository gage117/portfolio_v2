import React from 'react';
import Project from './Project';
import projectList from './Project-list';

function Projects() {
	return (
		<div id='Projects'>
			<p className='projects-header'>Latest Projects</p>
			<hr />
			{projectList.map((project, index) => <Project key={index} project={project} />)}
		</div>
	);
}

export default Projects;
