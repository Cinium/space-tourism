import './CrewPage.css';
import PageHeading from 'components/page-heading/PageHeading';
import CrewSlide from 'components/slides/CrewSlide';
import { useState } from 'react';
import Slider from 'components/Slider/Slider';
import FadeImage from 'components/fade-image/FadeImage';
import { useSelector } from 'react-redux';

export default function CrewPage({ data }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const width = useSelector(state => state.screenSize.width);

	const renderImage = () => (
		<FadeImage
			imgSrc={data[currentSlide]?.link}
			classes='crew__image'
		/>
	);

	return (
		<section className='crew-page'>
			<PageHeading
				span={'02'}
				text={'Meet your crew'}
				classes={'crew__heading'}
			/>
			{width < 1350 && renderImage()}

			<Slider
				direction='horizontal'
				data={data && data}
				slideComponent={CrewSlide}
				getSlide={setCurrentSlide}
			/>

			{width > 1350 && renderImage()}
		</section>
	);
}
