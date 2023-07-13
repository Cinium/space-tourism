import PageHeading from 'components/page-heading/PageHeading';
import './DestPage.css';
import { useState } from 'react';
import FadeImage from 'components/fade-image/FadeImage';
import planets from 'assets/images/planets';

export default function DestPage({ data }) {
	const [planet, setPlanet] = useState(0);

	const hadnleNavClick = i => {
		setPlanet(i);
	};

	const renderUl = data => {
		return (
			<ul className='dest_nav-list'>
				{data.map((el, i) => (
					<li
						className={`dest_list-item` + (planet === i ? ' active' : '')}
						key={i}
					>
						<button className='nav-text' onClick={() => hadnleNavClick(i)}>
							{el.name}
						</button>
					</li>
				))}
			</ul>
		);
	};

	return (
		<main className='dest-page'>
			<PageHeading span={'01'} classes={'dest_heading'}>
				Pick your destination
			</PageHeading>

			<div className='dest-page_content'>
				<FadeImage
					images={planets}
					currentImg={planet}
					classes='planet-image'
				/>

				<div className='dest_planets'>
					{renderUl(data)}

					<h3 className='dest_planet-title heading-2'>{data[planet].name}</h3>
					<p className='dest_planet-paragraph'>{data[planet].decription}</p>

					<div className='dest_divider' />

					<div className='dest_travel-info'>
						<div className='dest_distance-info-block subheading-2'>
							AVG. DISTANCE
							<p className='dest_info-text'>{data[planet].distance}</p>
						</div>
						<div className='dest_time-info-block subheading-2'>
							Est. travel time
							<p className='dest_info-text'>{data[planet].travelTime}</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
