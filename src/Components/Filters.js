import React from 'react'
import styled from 'styled-components'

import Title from './Title'

const Filters = ({ setFilter }) => {
	return (
		<Wrapper>
			<div style={{ padding: '20px 0 0 20px' }}>
				<Title>Количество Пересадок</Title>
			</div>

			<Settings>
				<Setting>
					<Checkbox
						type="checkbox"
						defaultChecked
						onClick={() => setFilter('ALL')}
					/>{' '}
					<Label>Все</Label>
				</Setting>

				<Setting>
					<Checkbox
						type="checkbox"
						onClick={() => setFilter('NO_TRANSFERS')}
					/>{' '}
					<Label>Без пересадок</Label>
				</Setting>

				<Setting>
					<Checkbox
						type="checkbox"
						onClick={() => setFilter('ONE_TRANSFER')}
					/>{' '}
					<Label>1 пересадка</Label>
				</Setting>

				<Setting>
					<Checkbox
						type="checkbox"
						onClick={() => setFilter('TWO_TRANSFERS')}
					/>{' '}
					<Label>2 пересадки</Label>
				</Setting>

				<Setting>
					<Checkbox
						type="checkbox"
						onClick={() => setFilter('THREE_TRANSFERS')}
					/>{' '}
					<Label>3 пересадки</Label>
				</Setting>
			</Settings>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 252px;
	width: 232px;
	border-radius: 5px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
	padding-bottom: 20px;
`

const Settings = styled.ul`margin-top: 20px;`

const Setting = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: #f1fcff;
	}
`

const Checkbox = styled.input`margin-left: 10px;`

const Label = styled.label`
	font-size: 13px;
	color: #4a4a4a;
	margin-left: 10px;
`

export default Filters
