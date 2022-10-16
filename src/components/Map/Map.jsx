import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'; // paper is just a div with a background color and useMediaQuery will help with the map being mobile responsive
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'; // Rating is a component within the material ui library. Its still in the lab and not in core
import useStyles from './styles';

const Map = () => {
	// here we call useStyles as a hook
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');

	const coordinates = { lat: 33.66946, lng: -117.82311 };
	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyD-eJN_I9HxzMKwqbwutuhJdEwdkXAjOok' }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={''}
				onChildClick={''}
			></GoogleMapReact>
		</div>
	);
};

export default Map;
