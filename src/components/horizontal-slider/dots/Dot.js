import './Dot.css'

export default function Dot({ number, goToSlide, isSelected }) {
	return (
		<div
			className={`dot ${isSelected ? 'selected' : ''}`}
			onClick={() => goToSlide(number)}
		/>
	);
}
