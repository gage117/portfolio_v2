import React from 'react';
import './Projects.css';
import Project from './Project';
import projectList from './Project-list';

function Projects() {
	return (
		<div className='projects'>
			<p className='projects-header'>Latest Projects</p>
			<hr />
			{projectList.map(project => <Project project={project} />)}
		</div>
	);
}

export default Projects;
