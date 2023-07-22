import { bgs } from 'assets/images/backgrounds';
import { useSelector } from 'react-redux';
import './Background.css';

export default function Background({ active }) {
	const device = useSelector(state => state.screenSize.device);

	const renderBG = () => {
		const BGArray = [];
		for (const bg in bgs[device]) {
			BGArray.push(
				<div
					className={`bg-image ${bg.includes(active) ? 'active' : ''}`}
					style={{ backgroundImage: `url(${bgs[device][bg]})` }}
					key={bg + '-bg'}
				/>
			);
		}
		return BGArray;
	};

	return renderBG();
}
