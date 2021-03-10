import React from 'react';
import myStripesScreenshot from '../../Images/my-stripes-screenshot.png';
import katiaScreenshot from '../../Images/Katia-profile.png';
import nutrilyzeScreenshot from '../../Images/Full-Screen.png';
// Icon Imports
import js from '../../Images/icons8-javascript.svg';
import react from '../../Images/icons8-react-native.svg';
import node from '../../Images/Node2.svg';
import postgres from '../../Images/Postgres.svg';
import aws from '../../Images/icons8-amazon-s3.svg';

const projectList = [
	{
		name: 'My Stripes',
		screenshot: myStripesScreenshot,
		description: (<span>A Full-stack e-commerce store I helped create during my internship at F5 Web Development. It’s a React application with the Node/Express backend using <b>Stripe</b> for payment processing, a Postgres database, and <b>Cloudinary</b> for images. I also implemented <b>static serving</b> to speed up load times and eliminate the client repo we had for a while.</span>),
		repos: {
			server: 'https://github.com/zda17/MyStripesShop---API',
			live: 'https://my-stripes.herokuapp.com/'
		},
		techStack: [
			js,
			react,
			postgres,
			node
		]
	},
	{
		name: 'Katia',
		screenshot: katiaScreenshot,
		description: (<span>A social media platform created to help gamers find new teammates in a much less random and impersonal way than traditional in-game matchmaking. Find players that play the games you play and on the platforms you own. Avatars are stored using AWS <b>S3 buckets</b> and live messaging implemented with <b>Socket.IO</b>.</span>),
		repos: {
			client: 'https://github.com/gage117/Katia-client',
			server: 'https://github.com/gage117/Katia-API',
			live: 'https://katia.now.sh/'
		},
		techStack: [
			js,
			react,
			postgres,
			node,
			aws
		]
	},
	{
		name: 'Nutrilyze',
		screenshot: nutrilyzeScreenshot,
		description: 'Nutrilyze is a nutrition and food tracker that allows you to easily add caloric and nutritional intake (e.g. carbs, protein, etc..) and even store foods with their name and nutrition values to easily add again later.',
		repos: {
			client: 'https://github.com/gage117/nutrilyze-client',
			server: 'https://github.com/gage117/nutrilyze-server-api',
			live: 'https://nutrilyze-client.now.sh/'
		},
		techStack: [
			js,
			react,
			postgres,
			node,
		]
	},
];

export default projectList;