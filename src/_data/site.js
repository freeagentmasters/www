import 'dotenv/config';

export default async function () {
	if ( process.env.ELEVENTY_ENV == 'development' ) {
		return {
			domain: 'http://api.cfmx.localhost'
		}
	} else {
		return {
			domain: 'https://api.cfmx.org'
		}
	}
};
