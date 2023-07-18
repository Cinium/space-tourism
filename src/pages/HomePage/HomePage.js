import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
	return (
		<main className='home-page'>
			<div className='home-page__text'>
				<h5 className='home-page__heading heading-5'>SO, YOU WANT TO TRAVEL TO</h5>
				<h2 className='home-page__heading heading-1'>SPACE</h2>
				<p className='body-text'>
					Let's face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we'll give you a truly out of this world
					experience!
				</p>
			</div>
			<Link to='/dest' className='main-button'>
				EXPLORE
			</Link>
		</main>
	);
}
