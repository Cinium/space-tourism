import './CrewSlide.css';

export default function CrewSlide({ data, ...rest }) {
	const { position, name, description } = data;

	return (
		<div className='crew-slide' {...rest}>
			<span
				className='crew-slide__member-position heading-4'
				style={{ opacity: '0.5' }}
			>
				{position}
			</span>
			<h3 className='crew-slide__member-name heading-3'>{name}</h3>
			<p className='crew-slide__member-description paragraph'>{description}</p>
		</div>
	);
}
