import { useEffect, useState } from 'react';

export default function FadeImage({images, currentImg, classes, alt}) {
	const [imageUrl, setImageUrl] = useState(images[0]);
	const [fadeIn, setFadeIn] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		setFadeOut(true);
		setFadeIn(false);

		setTimeout(() => {
			setImageUrl(images[currentImg]);
		}, 200);
	}, [currentImg, images]);

	useEffect(() => {
		setFadeOut(false);
		setFadeIn(true);
	}, [imageUrl]);

	return (
		<img
			src={imageUrl}
			alt={alt}
			className={`${classes} ${fadeIn ? 'fadeIn' : ''} ${
				fadeOut ? 'fadeOut' : ''
			}`}
		/>
	);
}
