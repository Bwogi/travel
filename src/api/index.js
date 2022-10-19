import axios from 'axios';

// const axios = require('axios');

const URL =
	'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = ;

export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				'X-RapidAPI-Key': 'edad59219bmsh2a2245a24f26b62p1a9599jsn9d792d9b66f5',
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
			},
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
