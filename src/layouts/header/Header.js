import './Header.css';
import logo from '../../assets/images/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BurgerButton from 'components/burger/BurgerButton';

export default function Header() {
	const screenWidth = useSelector(state => state.screenSize.width);

	const linksData = [
		{
			span: '00',
			textContent: `{screenWidth > 768 && <span className='nav-num'>00</span>}HOME`,
			to: '/',
		},
		{
			span: '01',
			textContent: `{screenWidth > 768 && <span className='nav-num'>01</span>}DESTINATION`,
			to: '/dest',
		},
		{
			span: '02',
			textContent: `{screenWidth > 768 && <span className='nav-num'>02</span>}CREW`,
			to: '/crew',
		},
		{
			span: '03',
			textContent: `{screenWidth > 768 && <span className='nav-num'>03</span>}TECHNOLOGY`,
			to: '/tech',
		},
	];

	return (
		<header className='header'>
			<img src={logo} alt='logo' className='header__logo' />

			{screenWidth > 768 && <div className='nav-line' />}

			{screenWidth > 768 ? (
				<nav className='header-nav'>
					<ul className='nav-list'>
						<li className='nav-item'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									'nav-link' + (isActive ? ' active' : '')
								}
							>
								{screenWidth > 768 && <span className='nav-num'>00</span>}
								HOME
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='dest'
								className={({ isActive }) =>
									'nav-link' + (isActive ? ' active' : '')
								}
							>
								{screenWidth > 768 && <span className='nav-num'>01</span>}
								DESTINATION
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='crew'
								className={({ isActive }) =>
									'nav-link' + (isActive ? ' active' : '')
								}
							>
								{screenWidth > 768 && <span className='nav-num'>02</span>}
								CREW
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='tech'
								className={({ isActive }) =>
									'nav-link' + (isActive ? ' active' : '')
								}
							>
								{screenWidth > 768 && <span className='nav-num'>03</span>}
								TECHNOLOGY
							</NavLink>
						</li>
					</ul>
				</nav>
			) : (
				<BurgerButton />
			)}
		</header>
	);
}
