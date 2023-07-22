import PageHeading from 'components/page-heading/PageHeading';
import './DestPage.css';
import { useState } from 'react';
import FadeImage from 'components/fade-image/FadeImage';

export default function DestPage({ data }) {
	const [planetIdx, setPlanetIdx] = useState(0);

	const hadnleNavClick = i => {
		setPlanetIdx(i);
	};

	const renderNavUl = data => {
		return (
			<ul className='dest-page__nav-list'>
				{data.map((el, i) => (
					<li
						className={`dest_list-item` + (planetIdx === i ? ' active' : '')}
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
			<PageHeading span={'01'} classes={'dest__heading'}>
				Pick your destination
			</PageHeading>

			<div className='dest-page__content'>
				<FadeImage
					imgSrc={data[planetIdx]?.link}
					classes='planet-image'
					alt={`planet-${data[planetIdx]?.name}`}
				/>

				<div className='dest-page__planets'>
					{renderNavUl(data)}

					<h3 className='dest-page__planet-title heading-2'>
						{data[planetIdx]?.name}
					</h3>
					<p className='dest-page__planet-description'>
						{data[planetIdx]?.decription}
					</p>

					<div className='dest-page___divider' />

					<div className='dest-page__info-block'>
						<div className='dest_info subheading-2'>
							AVG. DISTANCE
							<p className='dest-page__info-text'>
								{data[planetIdx]?.distance}
							</p>
						</div>
						<div className='dest_info subheading-2'>
							Est. travel time
							<p className='dest-page__info-text'>
								{data[planetIdx]?.travelTime}
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
