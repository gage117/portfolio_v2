import React from 'react';

function Project(props) {
	const {name, screenshot, description, repos, techStack} = props.project;
	return (
		<article key={name} className='project'>
			<h2 className='name'>{name.toLowerCase()}</h2>
			<img src={screenshot} alt={`${name} screenshot`} />
			<p className='description'>{description}</p>
			<article className='tech-stack'>
				<h3>Tech Stack</h3>
			</article>
			<hr />
		</article>
	);
}

export default Project;
