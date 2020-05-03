import React from 'react'
import styled from 'styled-components'

import Header from './Components/Header'
import Filters from './Components/Filters'
import Sort from './Components/Sort'
import Container from './Components/Container'
import Card from './Components/Card'

const App = () => {
	return (
		<div className="App">
			<Header />

			<Container>
				<Controls>
					<Filters />

					<div style={{ marginLeft: 20 }}>
						<Sort />
						<Card />
					</div>
				</Controls>
			</Container>
		</div>
	)
}

const Controls = styled.div`
	display: flex;
	align-items: flex-start;
`

export default App
