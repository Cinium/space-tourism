import './DestPage.css';
import { useState } from 'react';

const planetsInfo = {
	moon: {
		name: 'moon',
		decription:
			"See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: '384,400 km',
		travelTime: '3 days',
	},
	mars: {
		name: 'mars',
		decription:
			"Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
		distance: '225 MIL. km',
		travelTime: '9 months',
	},
	europa: {
		name: 'europa',
		decription:
			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: '628 MIL. km',
		travelTime: '3 years',
	},
	titan: {
		name: 'titan',
		decription:
			'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
		distance: '1.6 BIL. km',
		travelTime: '7 years',
	},
};

export default function DestPage() {
	const [planet, setPlanet] = useState('moon');

	const hadnleNavClick = e => {
		setPlanet(e.target.textContent);
	};

	return (
		<main className='dest-page'>
			<h2 className='heading-5 page-heading dest_heading'>
				<span>01</span> Pick your destination
			</h2>

			<div className='dest-page_content'>
				<img
					src={require(`assets/images/destination/image-${planetsInfo[planet].name}.webp`)}
					alt='planet'
					className='planet-image'
				/>

				<div className='dest_planets'>
					<ul className='dest_nav-list'>
						<li
							className={
								`dest_list-item` + (planet === 'moon' ? ' active' : '')
							}
						>
							<button className='nav-text' onClick={hadnleNavClick}>
								moon
							</button>
						</li>
						<li
							className={
								`dest_list-item` + (planet === 'mars' ? ' active' : '')
							}
						>
							<button className='nav-text' onClick={hadnleNavClick}>
								mars
							</button>
						</li>
						<li
							className={
								`dest_list-item` + (planet === 'eurora' ? ' active' : '')
							}
						>
							<button className='nav-text' onClick={hadnleNavClick}>
								europa
							</button>
						</li>
						<li
							className={
								`dest_list-item` + (planet === 'titan' ? ' active' : '')
							}
						>
							<button className='nav-text' onClick={hadnleNavClick}>
								titan
							</button>
						</li>
					</ul>

					<h3 className='dest_planet-title heading-2'>
						{planetsInfo[planet].name}
					</h3>
					<p className='dest_planet-paragraph'>
						{planetsInfo[planet].decription}
					</p>
					<div className='dest_travel-info'>
						<div className='dest_distance-info-block subheading-2'>
							AVG. DISTANCE
							<p className='dest_info-text'>{planetsInfo[planet].distance}</p>
						</div>
						<div className='dest_time-info-block subheading-2'>
							Est. travel time
							<p className='dest_info-text'>{planetsInfo[planet].travelTime}</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
