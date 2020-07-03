import React from 'react';

function Project(props) {
	const {name, screenshot, description, repos, techStack} = props.project;
	return (
		<div key={name}>
			<p>{name}</p>
			<img src={screenshot} alt={`${name} screenshot`} />
			<p>{description}</p>
		</div>
	);
}

export default Project;
