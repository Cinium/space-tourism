import './HorizontalSlider.css';
import { useState } from 'react';
import SlidesList from './slides-list/SlidesList';
import Dots from './dots/Dots';

export default function HorizontalSlider({ data, slideComponent }) {
	const [slide, setSlide] = useState(0);
	const [animation, setAnimation] = useState(false);

	const goToSlide = number => {
		if (slide === number) return;
		setAnimation(false);

		setSlide(number);

		setTimeout(() => {
			setAnimation(true);
		}, 0);
	};

	return (
		<div className='horizontal-slider'>
			<SlidesList
				data={data}
				slideNumber={slide}
				SlideComponent={slideComponent}
				animation={animation}
			/>
			<Dots count={data.length} currentDot={slide} goToSlide={goToSlide} />
		</div>
	);
}
