import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavSpace, NavItemBtn, NavBtnLink } from './Navbar.elements';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click)

	const showButton = () => {
		if(window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	}

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener ('resize', showButton)

	return (
		<>
			<IconContext.Provider value={{color: '#0A1931'}}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/" >
							<NavIcon />
							LOGO
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/">
									LBN
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/update">
									Update
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/resources">
									Resources
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/startup">
									Startup Fund
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/exhibition">
									Exhibition
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/bizconnect">
									Business Connect
								</NavLinks>
							</NavItem>
							<NavSpace />
							<NavItem>
								<NavLinks to="/login">
									Log in
								</NavLinks>
							</NavItem>
							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/sign-up">
										<Button primary>Register</Button>
									</NavBtnLink>
								) : 
								(
									<NavBtnLink to="/sign-up">
										<Button fontBig primary>
											Register
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}
 
export default Navbar
