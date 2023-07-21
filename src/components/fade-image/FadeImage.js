/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import './FadeImage.css';

export default function FadeImage({ images, currentImg, classes, alt }) {
	const [animation, setAnimation] = useState({ fadeIn: false, fadeOut: false });
	const [isInitial, setIsInitial] = useState(true);
	const ref = useRef();

	useEffect(() => {
		if (isInitial) {
			setAnimation({ fadeIn: true, fadeOut: false });
			setIsInitial(false);
		} else {
			setAnimation({ fadeIn: false, fadeOut: true });

			setTimeout(() => {
				ref.current.src = images[currentImg];
				setAnimation({ fadeIn: true, fadeOut: false });
			}, 300);
		}
	}, [currentImg, images]);

	return (
		<img
			ref={ref}
			src={images[0]}
			alt={alt}
			className={`fade-img ${classes} ${animation.fadeIn ? 'fadeIn' : ''} ${
				animation.fadeOut ? 'fadeOut' : ''
			}`}
		/>
	);
}
