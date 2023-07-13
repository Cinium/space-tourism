import './Slider.css';
import { useState } from 'react';
import SlidesList from '../slides-list/SlidesList';
import Dots from '../dots/Dots';

export default function Slider({
	direction,
	data,
	slideComponent,
	getSlide,
	width,
	height,
}) {
	const [slide, setSlide] = useState(0);
	const [animation, setAnimation] = useState(false);

	const goToSlide = number => {
		if (slide === number) return;
		setAnimation(false);

		setSlide(number);
		if (getSlide) getSlide(number);

		setTimeout(() => {
			setAnimation(true);
		}, 0);
	};

	const dotsProps = {
		count: data.length,
		currentDot: slide,
		goToSlide,
		size: direction === 'vertical' ? 'L' : 'S',
	};

	return (
		<div className={`slider ${direction}-slider`}>
			{direction === 'vertical' && <Dots {...dotsProps} />}

			<SlidesList
				direction={direction}
				data={data}
				slideNumber={slide}
				SlideComponent={slideComponent}
				animation={animation}
				width={width}
				height={height}
			/>

			{direction === 'horizontal' && <Dots {...dotsProps} />}
		</div>
	);
}
