import './Header.css';
import logo from '../../assets/images/shared/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className='header'>
			<img src={logo} alt='logo' className='header__logo' />

			<div className='nav-line' />

			<nav className='header-nav'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								'nav-link' + (isActive ? ' nav-link_active' : '')
							}
						>
							<span className='nav-num'>00</span>
							HOME
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to='dest'
							className={({ isActive }) =>
								'nav-link' + (isActive ? ' nav-link_active' : '')
							}
						>
							<span className='nav-num'>01</span>
							DESTINATION
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to='crew'
							className={({ isActive }) =>
								'nav-link' + (isActive ? ' nav-link_active' : '')
							}
						>
							<span className='nav-num'>02</span>
							CREW
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to='tech'
							className={({ isActive }) =>
								'nav-link' + (isActive ? ' nav-link_active' : '')
							}
						>
							<span className='nav-num'>03</span>
							TECHNOLOGY
						</NavLink>
					</li>
				</ul>
			</nav>

		</header>
	);
}
