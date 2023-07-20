/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './FadeImage.css';

export default function FadeImage({ images, currentImg, classes, alt }) {
	const [imageUrl, setImageUrl] = useState(images[0]);
	const [animation, setAnimation] = useState({ fadeIn: false, fadeOut: false });
	const [isInitial, setIsInitial] = useState(true);

	useEffect(() => {
		if (isInitial) {
			setAnimation({ fadeIn: true, fadeOut: false });
			setIsInitial(false);
		} else {
			setAnimation({ fadeIn: false, fadeOut: true });

			// setTimeout(() => {
			// 	setImageUrl(images[currentImg]);
			// }, 300);
		}
	}, [currentImg, images]);

	useEffect(() => {
		if (!isInitial && animation.fadeOut) {
			setTimeout(() => {
				setImageUrl(images[currentImg]);
			}, 400);
		}
	}, [animation]);

	useEffect(() => {
		if (!isInitial) setAnimation({ fadeIn: true, fadeOut: false });
	}, [imageUrl]);

	return (
		<img
			src={imageUrl}
			alt={alt}
			className={`${classes} ${animation.fadeIn ? 'fadeIn' : ''} ${
				animation.fadeOut ? 'fadeOut' : ''
			}`}
		/>
	);
}
