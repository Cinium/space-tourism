import { useEffect, useState } from 'react';

export default function useScreenSize() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [device, setDevice] = useState('tablet');

	useEffect(() => {
		const handleResize = () => {
			const w = window.screen.width;
			const h = window.screen.height;

			setWidth(w);
			setHeight(h);

			if (w > 1000) setDevice('desktop');
			else if (w > 580) setDevice('tablet');
			else setDevice('mobile');
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		width,
		height,
		device,
	};
}
