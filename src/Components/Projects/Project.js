import React from 'react';

function Project(props) {
	const {name, screenshot, description, repos, techStack} = props.project;

	const generateIconElement = (tech) => {
		return (
			<img src={tech} alt='tech-stack-icon' />
		);
	};

	return (
		<article key={name} className='project'>
			<h2 className='name'>{name.toLowerCase()}</h2>
			<img src={screenshot} alt={`${name} screenshot`} />
			<p className='description'>{description}</p>
			<article className='tech-stack'>
				<h3>Tech Stack</h3>
				<hr />
				<div className='tech-icons'>
					{techStack.map(tech => generateIconElement(tech))}
				</div>
			</article>
			<hr />
		</article>
	);
}

export default Project;
