import './Header.css';
import logo from 'assets/images/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BurgerButton from 'components/burger/BurgerButton';

export default function Header() {
	const device = useSelector(state => state.screenSize.device);

	const linksData = [
		{
			textContent: `HOME`,
			to: '/',
		},
		{
			textContent: `DESTINATION`,
			to: '/dest',
		},
		{
			textContent: `CREW`,
			to: '/crew',
		},
		{
			textContent: `TECHNOLOGY`,
			to: '/tech',
		},
	];

	const renderUL = () => {
		return linksData.map((link, i) => (
			<li className='nav-item' key={i}>
				<NavLink
					to={link.to}
					className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
				>
					{device !== 'tablet' && (
						<span className='nav-num'>{String(i).padStart(2, '0')}</span>
					)}
					{link.textContent}
				</NavLink>
			</li>
		));
	};

	return (
		<header className='header'>
			<img src={logo} alt='logo' className='header__logo' />

			{device === 'desktop' && <div className='nav-line' />}

			{device !== 'mobile' ? (
				<nav className='header-nav'>
					<ul className='nav-list'>{renderUL()}</ul>
				</nav>
			) : (
				<BurgerButton sideMenuLinks={linksData} />
			)}
		</header>
	);
}
