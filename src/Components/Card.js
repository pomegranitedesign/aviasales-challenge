import React from 'react'
import styled from 'styled-components'

import DemoLogo from '../Assets/Images/demoLogoCompany.png'

const Card = () => {
	return (
		<Wrapper>
			<Top>
				<Price>13 400 Р</Price>
				<Logo src={DemoLogo} />
			</Top>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 20px;
	min-width: 502px;
	background-color: #ffffff;
	padding: 20px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
`

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`

const Price = styled.h1`
	color: #2196f3;
	font-size: 24px;
	font-weight: 600;
`

const Logo = styled.img``

export default Card
