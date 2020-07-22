import React from 'react';

function Project(props) {
	const {name, screenshot, description, repos, techStack} = props.project;

	const generateIconElement = (tech, index) => {
		return (
			<img src={tech} alt='tech-stack-icon' key={index} />
		);
	};

	const generateRepoLink = (repo, index) => {
		// repo[0] is repo name, repo[1] is repo URL

		// Change Repo Name for readability
		if (repo[0] === 'client') repo[0] = 'Client Repo';
		if (repo[0] === 'server') repo[0] = 'Server Repo';
		if (repo[0] === 'live') repo[0] = 'Live Demo';

		return (
			<a href={repo[1]} target='_blank' rel='noopener noreferrer' key={index}>{repo[0]}</a>
		);
	};

	return (
		<article key={name} className='project'>
			<h2 className='name'>{name.toLowerCase()}</h2>
			<img src={screenshot} alt={`${name} screenshot`} />
			<p className='description'>{description}</p>
			<article className='repo-links'>
				{Object.entries(repos).map((repo, index) => generateRepoLink(repo, index))}
			</article>
			<article className='tech-stack'>
				<h3>Tech Stack</h3>
				<hr />
				<div className='tech-icons'>
					{techStack.map((tech, index) => generateIconElement(tech, index))}
				</div>
			</article>
			<hr />
		</article>
	);
}

export default Project;
