import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useScreenSize from 'utils/hooks/useScreenSize';
import { setDevice, setHeight, setWidth } from 'redux/screenSizeSlice';
import Header from './layouts/header/Header';
import HomePage from 'pages/HomePage/HomePage';
import DestPage from 'pages/DestPage/DestPage';
import CrewPage from 'pages/CrewPage/CrewPage';
import TechPage from 'pages/TechPage/TechPage';
import Background from 'layouts/background/Background';
import { api } from 'utils/api';

function App() {
	const location = useLocation();
	const [background, setBackground] = useState('');
	const { width, height, device } = useScreenSize();
	const dispatch = useDispatch();

	const [planetsData, setPlanetsData] = useState([]);
	const [techData, setTechData] = useState([]);
	const [membersData, setMembersData] = useState([]);

	useEffect(() => {
		dispatch(setHeight(height));
		dispatch(setWidth(width));
		dispatch(setDevice(device));
	}, [width, height, device, dispatch]);

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setBackground('home');
				break;
			default:
				setBackground(location.pathname.substring(1));
				break;
		}
	}, [location]);

	useEffect(() => {
		Promise.all([
			api.getPlanetsInfo(),
			api.getCrewInfo(),
			api.getTechInfo(),
		]).then(values => {
			setPlanetsData(values[0]);
			setMembersData(values[1]);
			setTechData(values[2]);
		});
	}, []);

	return (
		<div className='App'>
			<Background active={background} />

			<Header />

			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/dest' element={<DestPage data={planetsData} />} />
				<Route path='/crew' element={<CrewPage data={membersData} />} />
				<Route path='/tech' element={<TechPage data={techData} />} />
			</Routes>
		</div>
	);
}

export default App;
