import './TechSlide.css';

export default function TechSlide({ data, ...rest }) {
	const { term, definition } = data;
	return (
		<div className='tech-slide' {...rest}>
			<span className='tech-slide__caption' style={{ opacity: '0.5' }}>
				THE TERMINOLOGy...
			</span>
			<h3 className='tech-slide__term heading-3'>{term}</h3>
			<p className='tech-slide__definition paragraph'>{definition}</p>
		</div>
	);
}
