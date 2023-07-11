import './SlidesList.css';

export default function SlidesList({ data, slideNumber, SlideComponent, animation }) {

	return (
		<div
			className={`slides-list ${animation ? 'fade-animation' : ''}`}
			style={{ transform: `translateX(-${slideNumber * 100}%)` }}
		>
			{data.map((slide, i) => (
				<SlideComponent data={slide} key={i} style={{
					opacity: slideNumber === i ? 1 : 0,
					transition: 'opacity .2s ease-in-out'
				}} />
			))}
		</div>
	);
}
