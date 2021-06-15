import { Link } from 'react-router-dom';
import  styled from 'styled-components';
import { FaMagento } from 'react-icons/fa'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
	background: #FFF8F2;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #0A1931;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(FaMagento)`
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 30px;
		right: 30px;
		transform: translate (-100, 60%)
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	font-size: 16px;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 80px;
		left: ${({click}) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: #FFF8F2;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 4px solid #0A1931;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: #0A1931;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	&:hover {
		font-weight: 700;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #0A1931;
			transition: all 0.3s ease;
			font-weight: 700;
		}
	}
`;

export const NavSpace = styled.div`
	margin-left: 100px;

	@media screen and (max-width: 960px) {
		margin: 0;
	}
`

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;