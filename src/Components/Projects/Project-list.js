import katiaScreenshot from '../../Images/Katia-profile.png';
import nutrilyzeScreenshot from '../../Images/Full-Screen.png';

const projectList = [
	{
		name: 'Katia',
		screenshot: katiaScreenshot,
		description: 'A social media platform created to help gamers find new teammates in a much less random and impersonal way than traditional in-game matchmaking. Find players that play the games you play and on the platforms you own. Avatars are stored using AWS S3 buckets and live messaging implemented with Socket.IO.',
		repos: {
			client: 'https://github.com/gage117/Katia-client',
			server: 'https://github.com/gage117/Katia-API',
			live: 'https://katia.now.sh/'
		},
		techStack: [
			'html',
			'css',
			'js',
			'react',
			'node',
			'postgres',
			'aws'
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
			'html',
			'css',
			'js',
			'react',
			'node',
			'postgres'
		]
	},
];

export default projectList;