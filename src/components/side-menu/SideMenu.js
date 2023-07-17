import { NavLink } from 'react-router-dom';
import './SideMenu.css';

export default function SideMenu({ isOpen }) {
	return (
		<menu className={`side-menu ${!isOpen ? 'hidden' : ''}`}>
			<li className='side-menu__item'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						'side-menu__link' + (isActive ? ' active' : '')
					}
				>
					<span className='nav-num'>00</span>
					HOME
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						'side-menu__link' + (isActive ? ' active' : '')
					}
				>
					<span className='nav-num'>01</span>
					DESTINATION
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						'side-menu__link' + (isActive ? ' active' : '')
					}
				>
					<span className='nav-num'>02</span>
					CREW
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						'side-menu__link' + (isActive ? ' active' : '')
					}
				>
					<span className='nav-num'>03</span>
					TECHNOLOGY
				</NavLink>
			</li>
		</menu>
	);
}
