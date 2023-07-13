import './Dots.css';
import Dot from '../small-dot/Dot';
import BigDot from 'components/big-dot/BigDot';

export default function Dots({ count, currentDot, goToSlide, size }) {
	const renderDots = () => {
		const dots = [];

		for (let i = 0; i < count; i++) {
			dots.push(
				<Dot
					key={`dot-${i}`}
					number={i}
					isSelected={currentDot === i ?? true}
					goToSlide={goToSlide}
				/>
			);
		}

		return dots;
	};

	const renderBigDots = () => {
		const dots = [];

		for (let i = 0; i < count; i++) {
			dots.push(
				<BigDot
					key={`dot-${i}`}
					number={i}
					isSelected={currentDot === i ?? true}
					goToSlide={goToSlide}
				/>
			);
		}

		return dots;
	};

	return (
		<div className='dots' style={{flexDirection: size === 'L' ? 'column' : ''}}>
			{size === 'S' || !size ? renderDots() : renderBigDots()}
		</div>
	);
}
