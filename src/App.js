import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import HomePage from 'pages/HomePage/HomePage';
import DestPage from 'pages/DestPage/DestPage';
import { bgs } from 'assets/images/bgs';
import CrewPage from 'pages/CrewPage/CrewPage';

function App() {
	const location = useLocation();
	const [background, setBackground] = useState('');

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


	return (
		<div className='App'>
			{bgs.map((bg, i) => (
				<div
					className={`bg-image ${bg.includes(background) ? 'active' : ''}`}
					style={{ backgroundImage: `url(${bg})` }}
					key={i}
				></div>
			))}
			<Header />

			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/dest' element={<DestPage />} />
				<Route path='/crew' element={<CrewPage />} />
			</Routes>
			{/* <Main /> */}
		</div>
	);
}

export default App;
