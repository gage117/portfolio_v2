import React from 'react';

function Project(props) {
	const {name, screenshot, description, repos, techStack} = props.project;
	return (
		<article key={name} className='project'>
			<p className='name'>{name.toLowerCase()}</p>
			<img src={screenshot} alt={`${name} screenshot`} />
			<p className='description'>{description}</p>
			<hr />
		</article>
	);
}

export default Project;
