import './PageHeading.css'

export default function PageHeading({ classes, span, text }) {
	return (
		<h2 className={`heading-5 page-heading ${classes}`}>
			<span>{span}</span> {text}
		</h2>
	);
}
