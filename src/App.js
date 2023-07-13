import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import HomePage from 'pages/HomePage/HomePage';
import DestPage from 'pages/DestPage/DestPage';
import { bgs } from 'assets/images/bgs';
import CrewPage from 'pages/CrewPage/CrewPage';
import TechPage from 'pages/TechPage/TechPage';

const memebersInfo = [
	{
		name: 'Douglas Hurley',
		position: 'Commander',
		description:
			'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
	},
	{
		name: 'MARK SHUTTLEWORTH',
		position: 'Mission Specialist',
		description:
			'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
	},
	{
		name: 'Victor Glover',
		position: 'PILOT',
		description:
			'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
	},
	{
		name: 'Anousheh Ansari',
		position: 'Flight Engineer',
		description:
			'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
	},
];

function App() {
	const location = useLocation();
	const [background, setBackground] = useState('');

	const renderBG = () => {
		return bgs.map((bg, i) => (
			<div
				className={`bg-image ${bg.includes(background) ? 'active' : ''}`}
				style={{ backgroundImage: `url(${bg})` }}
				key={i}
			></div>
		)).reverse();
	};

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
			{renderBG()}
			<Header />

			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/dest' element={<DestPage />} />
				<Route
					path='/crew'
					element={<CrewPage memebersInfo={memebersInfo} />}
				/>
				<Route path='/tech' element={<TechPage/>}></Route>
			</Routes>
			{/* <Main /> */}
		</div>
	);
}

export default App;
