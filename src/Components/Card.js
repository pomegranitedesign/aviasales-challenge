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

			<Body>
				<City>
					<From>
						<Label>MOW - HKT</Label>
						<Info>10:45 - 8:00</Info>
					</From>

					<To>
						<Label>MOW - HKT</Label>
						<Info>11:20 - 00:50</Info>
					</To>
				</City>

				<Time>
					<From>
						<Label>В Пути</Label>
						<Info>21ч 15м</Info>
					</From>

					<To>
						<Label>В Пути</Label>
						<Info>13ч 30м</Info>
					</To>
				</Time>

				<Transfers>
					<From>
						<Label>2 Пересадки</Label>
						<Info>HKG, JNB</Info>
					</From>

					<To>
						<Label>1 Пересадка</Label>
						<Info>HKG</Info>
					</To>
				</Transfers>
			</Body>
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

const Body = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const City = styled.div``

const Time = styled.div``

const Transfers = styled.div``

const Label = styled.label`
	color: #a0b0b9;
	font-size: 12px;
	font-weight: 600;
`

const Info = styled.h4`
	color: #4a4a4a;
	font-size: 14px;
	font-weight: 600;
`

const From = styled.div`margin-bottom: 10px;`

const To = styled.div``

export default Card
