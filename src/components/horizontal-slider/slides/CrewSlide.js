export default function CrewSlide({ data, ...rest }) {
	const { position, name, description } = data;

	return (
		<div className='slide' {...rest}>
			<span
				className='crew__member-position heading-4'
				style={{ opacity: '0.5' }}
			>
				{position}
			</span>
			<h3 className='crew__member-name heading-3'>{name}</h3>
			<p className='crew__member-description'>{description}</p>
		</div>
	);
}
