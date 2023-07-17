import { useState } from 'react';
import './BurgerButton.css';
import SideMenu from 'components/side-menu/SideMenu';

export default function BurgerButton() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<>
			<div
				className={`burger-button ${isClicked ? 'active' : ''}`}
				onClick={() => setIsClicked(!isClicked)}
			>
				<div
					className={`burger-button__line burger-button__line_top-l ${
						isClicked ? 'active' : ''
					}`}
				/>
				<div
					className={`burger-button__line burger-button__line_top-r ${
						isClicked ? 'active' : ''
					}`}
				/>

				<div
					className={`burger-button__line burger-button__line_mid-l ${
						isClicked ? 'active' : ''
					}`}
				/>
				<div
					className={`burger-button__line burger-button__line_mid-r ${
						isClicked ? 'active' : ''
					}`}
				/>

				<div
					className={`burger-button__line burger-button__line_bot-l ${
						isClicked ? 'active' : ''
					}`}
				/>
				<div
					className={`burger-button__line burger-button__line_bot-r ${
						isClicked ? 'active' : ''
					}`}
				/>
			</div>
			<SideMenu isOpen={isClicked} />
		</>
	);
}
