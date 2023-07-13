import './CrewPage.css';
import PageHeading from 'components/page-heading/PageHeading';
import CrewSlide from 'components/slides/CrewSlide';
import { useEffect, useState } from 'react';
import crewMembers from 'assets/images/crewMembers';
import Slider from 'components/Slider/Slider';

export default function CrewPage({ memebersInfo }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [imageUrl, setImageUrl] = useState(crewMembers[0]);
	const [fadeIn, setFadeIn] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		setFadeOut(true);
		setFadeIn(false);

		setTimeout(() => {
			setImageUrl(crewMembers[currentSlide]);
		}, 200);
	}, [currentSlide]);

	useEffect(() => {
		setFadeOut(false);
		setFadeIn(true);
	}, [imageUrl]);

	return (
		<section className='crew'>
			<PageHeading
				span={'02'}
				text={'Meet your crew'}
				classes={'crew__heading'}
			/>

			<Slider
				direction='horizontal'
				data={memebersInfo}
				slideComponent={CrewSlide}
				getSlide={setCurrentSlide}
			/>
			<img
				src={imageUrl}
				alt='member'
				className={`crew__image ${fadeIn ? 'fadeIn' : ''} ${
					fadeOut ? 'fadeOut' : ''
				}`}
			/>
		</section>
	);
}
