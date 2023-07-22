import PageHeading from 'components/page-heading/PageHeading';
import './TechPage.css';
import TechSlide from 'components/slides/TechSlide';
import Slider from 'components/Slider/Slider';
import { useState } from 'react';
import FadeImage from 'components/fade-image/FadeImage';
import { useSelector } from 'react-redux';

export default function TechPage({ data }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const device = useSelector(state => state.screenSize.device);

	return (
		<section className='tech-page'>
			<PageHeading span={'03'} classes={'tech__heading'}>
				SPACE LAUNCH 101
			</PageHeading>
			<FadeImage
				imgSrc={
					data[currentSlide]?.links[
						device === 'desktop' ? 'portrait' : 'landscape'
					]
				}
				classes='tech__img'
			/>
			<Slider
				direction='vertical'
				data={data}
				slideComponent={TechSlide}
				height={304}
				getSlide={setCurrentSlide}
			/>
		</section>
	);
}
