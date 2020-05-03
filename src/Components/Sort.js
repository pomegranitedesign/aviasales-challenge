import React, { useState } from 'react'
import styled from 'styled-components'

const Sort = () => {
	const [ sortBy, setSortBy ] = useState('lowest')
	return (
		<Wrapper>
			<Button
				style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
				isActive={sortBy === 'lowest'}
				value={sortBy}
				onClick={() => setSortBy('lowest')}
			>
				Самый Дешёвый
			</Button>

			<Button
				isActive={sortBy === 'fastest'}
				value={sortBy}
				onClick={() => setSortBy('fastest')}
				style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
			>
				Самый Быстрый
			</Button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const Button = styled.button`
	padding: 15px 57px;
	background-color: ${({ isActive }) => (isActive ? '#2196F3' : '#ffffff')};
	border: none;
	border: 1px solid #dfe5ec;
	cursor: pointer;
	width: 252px;
	letter-spacing: 0.5px;
	color: ${({ isActive }) => (isActive ? '#ffffff' : '#4a4a4a')};
	font-size: 12px;
	font-weight: 600;
	outline: 0;
	text-transform: uppercase;

	&:--moz-focus-inner {
		border: none;
	}
`

export default Sort
