import { NavLink } from 'react-router-dom';
import './SideMenu.css';

export default function SideMenu({ isOpen, setIsOpen, links }) {
	return (
		<>
			<menu className={`side-menu ${!isOpen ? 'hidden' : ''}`}>
				{links.map((link, i) => (
					<li className='side-menu__item' key={i}>
						<NavLink
							to={link.to}
							className={({ isActive }) =>
								'side-menu__link' + (isActive ? ' active' : '')
							}
						>
							<span className='side-menu__link-span'>
								{String(i).padStart(2, '0')}
							</span>
							{link.textContent}
						</NavLink>
					</li>
				))}
			</menu>
			<div
				className='side-menu__back'
				onClick={() => setIsOpen(!isOpen)}
				style={{
					display: !isOpen ? 'none' : 'block',
				}}
			/>
		</>
	);
}
