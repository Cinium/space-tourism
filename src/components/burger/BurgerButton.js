import { useEffect, useState } from 'react';
import './BurgerButton.css';
import SideMenu from 'components/side-menu/SideMenu';
import { useLocation } from 'react-router-dom';

export default function BurgerButton({ sideMenuLinks }) {
	const [isClicked, setIsClicked] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsClicked(false);
	}, [location]);

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
			<SideMenu
				isOpen={isClicked}
				setIsOpen={setIsClicked}
				links={sideMenuLinks}
			/>
		</>
	);
}
