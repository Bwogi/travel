import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		console.log(coordinates, bounds);
		// at the end of the function, we have to have a dependency
		// if the array is left empty, it means this code will only run only at the start of the application
		getPlacesData().then((data) => {
			console.log(data);
			setPlaces(data);
		});
	}, [coordinates, bounds]);
	return (
		<>
			{/* to reset the margins and padding use CssBaseline first */}
			<CssBaseline />
			<Header />
			{/* here we have a grid of type container with a spacing of 3 and 100% width inline style */}
			<Grid container spacing={3} style={{ width: '100%' }}>
				{/* inside this we will have one more grid of type item and it will take all 12 spaces(full width) on mobile devices but on medium devices or larger, it will taks 4 spaces */}
				<Grid item xs={12} md={4}>
					<List />
				</Grid>
				{/* the map is going to take 8 spaces on medium or larger devices */}
				<Grid item xs={12} md={8}>
					<Map
						setCoordinates={setCoordinates}
						coordinates={coordinates}
						setBounds={setBounds}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
