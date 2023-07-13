import PageHeading from 'components/page-heading/PageHeading';
import './TechPage.css';
import TechSlide from 'components/slides/TechSlide';
import Slider from 'components/Slider/Slider';
import { useState } from 'react';
import techImgs from 'assets/images/techImages';
import FadeImage from 'components/fade-image/FadeImage';

export default function TechPage({ data }) {
	const [currentSlide, setCurrentSlide] = useState(0);


	return (
		<section className='tech-page'>
			<PageHeading span={'03'} classes={'tech__heading'}>
				SPACE LAUNCH 101
			</PageHeading>
			<Slider
				direction='vertical'
				data={data}
				slideComponent={TechSlide}
				height={304}
				getSlide={setCurrentSlide}
			/>
			<FadeImage
				currentImg={currentSlide}
				images={techImgs}
				classes='tech__img'
			/>
		</section>
	);
}
