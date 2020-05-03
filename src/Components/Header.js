import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import Logo from '../Assets/Images/Logo.png'

const Header = () => {
	return (
		<Container>
			<header>
				<Image src={Logo} alt="Logo" />
			</header>
		</Container>
	)
}

const Image = styled.img`
	display: block;
	margin: 50px auto;
`

export default Header
