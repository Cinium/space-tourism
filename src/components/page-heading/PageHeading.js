import './PageHeading.css'

export default function PageHeading({ classes, span, text, children }) {
	return (
		<h2 className={`heading-5 page-heading ${classes}`}>
			<span>{span}</span> {text ?? children}
		</h2>
	);
}
