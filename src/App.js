import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useScreenSize from 'utils/hooks/useScreenSize';
import Header from './layouts/header/Header';
import HomePage from 'pages/HomePage/HomePage';
import DestPage from 'pages/DestPage/DestPage';
import CrewPage from 'pages/CrewPage/CrewPage';
import TechPage from 'pages/TechPage/TechPage';
import { bgs } from 'assets/images/bgs';
import { setDevice, setHeight, setWidth } from 'redux/screenSizeSlice';
import './App.css';
import { api } from 'utils/api';

// const memebersInfo = [
// 	{
// 		name: 'Douglas Hurley',
// 		position: 'Commander',
// 		description:
// 			'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
// 	},
// 	{
// 		name: 'MARK SHUTTLEWORTH',
// 		position: 'Mission Specialist',
// 		description:
// 			'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
// 	},
// 	{
// 		name: 'Victor Glover',
// 		position: 'PILOT',
// 		description:
// 			'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
// 	},
// 	{
// 		name: 'Anousheh Ansari',
// 		position: 'Flight Engineer',
// 		description:
// 			'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
// 	},
// ];

// const techPageData = [
// 	{
// 		term: 'LAUNCH VEHICLE',
// 		definition: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
// 	},
// 	{
// 		term: 'SPACEPORT',
// 		definition: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.`,
// 	},
// 	{
// 		term: 'SPACE CAPSULE',
// 		definition: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
// 	},
// ];

// const planetsInfo = [
// 	{
// 		name: 'moon',
// 		decription:
// 			"See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
// 		distance: '384,400 km',
// 		travelTime: '3 days',
// 	},
// 	{
// 		name: 'mars',
// 		decription:
// 			"Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
// 		distance: '225 MIL. km',
// 		travelTime: '9 months',
// 	},
// 	{
// 		name: 'europa',
// 		decription:
// 			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
// 		distance: '628 MIL. km',
// 		travelTime: '3 years',
// 	},
// 	{
// 		name: 'titan',
// 		decription:
// 			'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
// 		distance: '1.6 BIL. km',
// 		travelTime: '7 years',
// 	},
// ];

function App() {
	const location = useLocation();
	const [background, setBackground] = useState('');
	const { width, height, device } = useScreenSize();
	const dispatch = useDispatch();

	const [planetsData, setPlanetsData] = useState([]);
	const [techData, setTechData] = useState([]);
	const [membersData, setMembersData] = useState([]);

	const renderBG = () => {
		const BGArray = [];
		for (const bg in bgs[device]) {
			BGArray.push(
				<div
					className={`bg-image ${bg.includes(background) ? 'active' : ''}`}
					style={{ backgroundImage: `url(${bgs[device][bg]})` }}
					key={bg + '-bg'}
				/>
			);
		}
		return BGArray;
	};

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
			{renderBG()}
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
