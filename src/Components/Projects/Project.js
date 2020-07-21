import React from 'react';

function Project(props) {
	const {name, screenshot, description, repos, techStack} = props.project;

	const generateTechIcons = (techStack) => {

	};

	return (
		<article key={name} className='project'>
			<h2 className='name'>{name.toLowerCase()}</h2>
			<img src={screenshot} alt={`${name} screenshot`} />
			<p className='description'>{description}</p>
			<article className='tech-stack'>
				<h3>Tech Stack</h3>
				<div className='tech-icons'>

				</div>
			</article>
			<hr />
		</article>
	);
}

export default Project;
