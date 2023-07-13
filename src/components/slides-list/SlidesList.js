import './SlidesList.css';

export default function SlidesList({
	data,
	slideNumber,
	SlideComponent,
	animation,
	direction,
	height,
	width
}) {
	return (
		<div
			className={`slides-list ${animation ? 'fade-animation' : ''}`}
			style={{
				transform: `translate${direction === 'vertical' ? 'Y' : 'X'}(-${slideNumber * 100}%)`,
				flexDirection: direction === 'vertical' ? 'column' : 'row',
				height: height + 'px',
				width: width + 'px'
			}}
		>
			{data.map((slide, i) => (
				<SlideComponent
					data={slide}
					key={i}
					style={{
						opacity: slideNumber === i ? 1 : 0,
						transition: 'opacity .2s ease-in-out',
					}}
				/>
			))}
		</div>
	);
}
