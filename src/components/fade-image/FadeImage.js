import { useEffect, useRef, useState } from 'react';
import './FadeImage.css';

export default function FadeImage({ imgSrc, classes, alt }) {
	const [animation, setAnimation] = useState({ fadeIn: false, fadeOut: false });
	const [isInitial, setIsInitial] = useState(true);
	const ref = useRef();

	const onLoad = () => {
		setAnimation({ fadeIn: true, fadeOut: false });
	};

	useEffect(() => {
		if (isInitial) {
			ref.current.src = imgSrc;

			setIsInitial(false);
		} else {
			setAnimation({ fadeIn: false, fadeOut: true });

			setTimeout(() => {
				ref.current.src = imgSrc;
			}, 300);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [imgSrc]);

	return (
		<img
			ref={ref}
			src={''}
			alt={alt}
			onLoad={onLoad}
			className={`fade-img ${classes} ${animation.fadeIn ? 'fadeIn' : ''} ${
				animation.fadeOut ? 'fadeOut' : ''
			}`}
		/>
	);
}
