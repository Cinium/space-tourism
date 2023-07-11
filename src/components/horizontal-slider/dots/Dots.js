import './Dots.css';
import Dot from './Dot';

export default function Dots({ count, currentDot, goToSlide }) {
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

	return <div className='dots'>{renderDots()}</div>;
}
