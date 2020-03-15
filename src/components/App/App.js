import React from 'react';
import './App.css';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

const App = () => {
	return (
		<div className="app">
			<Header />
			<RandomPlanet />
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList />
				</div>
				<div className="col-md-6">
					<PersonDetails />
				</div>
			</div>
		</div>
	);
};
export default App;
