import './CrewPage.css';
import PageHeading from 'components/page-heading/PageHeading';
import CrewSlide from 'components/slides/CrewSlide';
import { useState } from 'react';
import crewMembers from 'assets/images/crewMembers';
import Slider from 'components/Slider/Slider';
import FadeImage from 'components/fade-image/FadeImage';

export default function CrewPage({ data }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<section className='crew'>
			<PageHeading
				span={'02'}
				text={'Meet your crew'}
				classes={'crew__heading'}
			/>
			<Slider
				direction='horizontal'
				data={data}
				slideComponent={CrewSlide}
				getSlide={setCurrentSlide}
			/>
			<FadeImage
				currentImg={currentSlide}
				images={crewMembers}
				classes='crew__image'
			/>
		</section>
	);
}
