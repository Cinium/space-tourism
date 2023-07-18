import './Slider.css';
import { useState } from 'react';
import SlidesList from '../slides-list/SlidesList';
import Dots from '../dots/Dots';
import { useSelector } from 'react-redux';

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
	const [touchPosition, setTouchPosition] = useState(null);
	const device = useSelector(state => state.screenSize.device);

	const changeSlide = (direction = 1) => {
		let slideNumber = 0;

		if (slide + direction < 0) {
			slideNumber = data.length - 1;
		} else {
			slideNumber = (slide + direction) % data.length;
		}

		setSlide(slideNumber);
		if (getSlide) getSlide(slideNumber);
	};

	const handleTouchStart = e => {
		const touchDown = e.touches[0].clientX;

		setTouchPosition(touchDown);
	};

	const handleTouchMove = e => {
		if (touchPosition === null) {
			return;
		}

		const currentPosition = e.touches[0].clientX;
		const direction = touchPosition - currentPosition;

		if (direction > 10) {
			changeSlide(1);
		}

		if (direction < -10) {
			changeSlide(-1);
		}

		setTouchPosition(null);
	};

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
		<div
			className={`slider ${direction}-slider`}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
		>
			{(direction === 'vertical' || device === 'mobile') && (
				<Dots {...dotsProps} />
			)}

			<SlidesList
				direction={direction}
				data={data}
				slideNumber={slide}
				SlideComponent={slideComponent}
				animation={animation}
				width={width}
				height={height}
			/>

			{direction === 'horizontal' && device !== 'mobile' && (
				<Dots {...dotsProps} />
			)}
		</div>
	);
}
