import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
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
					<Map />
				</Grid>
			</Grid>
		</>
	);
};

export default App;
