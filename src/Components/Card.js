import React, { Fragment } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import uuid from 'uuid/dist/v4'

import { minutesToHours, formatPrice } from '../misc'
import DemoLogo from '../Assets/Images/demoLogoCompany.png'

const Card = ({ price, segments = [] }) => {
	return (
		<Wrapper>
			<Top>
				<Price>{formatPrice(price)}</Price>
				<Logo src={DemoLogo} />
			</Top>

			<Body>
				<City>
					{segments.map((segment) => (
						<div
							key={uuid()}
							style={{
								display: 'flex',
								justifyContent: 'space-between'
							}}
						>
							<From>
								<Label>
									{segment.origin} - {segment.destination}
								</Label>
								<Info>
									{moment(segment.date).format('HH:MM')} - {' '}
									{moment
										.utc(segment.date)
										.add(segment.duration, 'seconds')
										.format('HH:MM')}
								</Info>
							</From>

							<From style={{ marginLeft: 100 }}>
								<Label>В Пути</Label>
								<Info>
									{minutesToHours(segment.duration)[0]}
								</Info>
							</From>

							<From style={{ marginLeft: 100 }}>
								<Label>
									{segment.stops.length > 1 ? (
										`${segment.stops.length} Пересадки`
									) : segment.stops.length === 1 ? (
										`1 Пересадка`
									) : (
										'0 Пересадок'
									)}
								</Label>
								<Info>
									{segment.stops.length > 1 ? (
										segment.stops.join(', ')
									) : segment.stops.length === 1 ? (
										segment.stops[0]
									) : (
										'Пересадок нет'
									)}
								</Info>
							</From>
						</div>
					))}
				</City>
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

const Transfers = styled.div`margin-left: 40px;`

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

const From = styled.div`
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
`

const To = styled.div``

export default Card
