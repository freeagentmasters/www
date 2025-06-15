import 'dotenv/config';
import Fetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = 'https://api.cfmx.org/freeagentmasters/v1/competitions/';

	if ( process.env.ELEVENTY_ENV == 'development' ) {
		url = 'http://api.cfmx.localhost/freeagentmasters/v1/competitions/';
	}

	return Fetch( url, {
		duration: '0d'
		,type: 'json'
		,fetchOptions: {
			headers: {
				'Authorization': process.env.API_TOKEN
			}
		}
	} );
};
