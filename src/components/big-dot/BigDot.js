import './BigDot.css'

export default function BigDot({ number, isSelected, goToSlide }) {
	return (
		<div
			className={`big-dot ${isSelected ? 'selected' : ''}`}
			onClick={() => goToSlide(number)}
		>
			{number + 1}
		</div>
	);
}
