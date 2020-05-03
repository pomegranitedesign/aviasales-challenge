import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import Header from './Components/Header'
import Filters from './Components/Filters'
import Sort from './Components/Sort'
import Container from './Components/Container'
import Card from './Components/Card'
import { fetchTickets } from './Actions/ticketsActions'

const App = ({ state, fetchTickets }) => {
	useEffect(
		() => {
			fetchTickets()
		},
		[ fetchTickets ]
	)

	return (
		<Fragment>
			<Header />

			<Container>
				<Controls>
					<Filters />

					<div style={{ marginLeft: 20, marginBottom: 20 }}>
						<Sort />
						{state.loading ? <h1>Loading...</h1> : null}
					</div>
				</Controls>
			</Container>
		</Fragment>
	)
}

const Controls = styled.div`
	display: flex;
	align-items: flex-start;
`

const mapStateToProps = ({ state }) => ({ state })
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchTickets }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
