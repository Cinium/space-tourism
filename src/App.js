import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import HomePage from './pages/HomePage/HomePage';
import bgHomeDesktop from './assets/images/home/background-home-desktop.jpg';
import bgDestDesktop from './assets/images/destination/background-destination-desktop.jpg';
import bgCrewDesktop from './assets/images/crew/background-crew-desktop.jpg';
import bgTechDesktop from './assets/images/technology/background-technology-desktop.jpg';
import DestPage from './pages/DestPage/DestPage';

function App() {
	const location = useLocation();
	const [background, setBackground] = useState('');

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setBackground(bgHomeDesktop);
				break;
			case '/dest':
				setBackground(bgDestDesktop);
				break;
			case '/crew':
				setBackground(bgCrewDesktop);
				break;
			case '/tech':
				setBackground(bgTechDesktop);
				break;
			default:
				break;
		}
	}, [location]);

	return (
		<div
			className='App'
			style={{
				backgroundColor: 'black',
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				// width: '100vw',
				minHeight: '100vh',
				paddingTop: '50px',
				boxSizing: 'border-box'
			}}
		>
			<Header />
			
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/dest' element={<DestPage />} >
					<Route path='moon' />
					<Route path='mars' />
					<Route path='eurora' />
					<Route path='titan' />
				</Route>
			</Routes>
			{/* <Main /> */}
		</div>
	);
}

export default App;
