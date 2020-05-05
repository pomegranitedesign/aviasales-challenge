import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import uuid from 'uuid/dist/v4'
import Loader from 'react-loader'

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
						{state.tickets ? (
							state.tickets
								.slice(0, 5)
								.map((ticket) => (
									<Card
										key={uuid()}
										price={ticket.price}
										segments={ticket.segments}
									/>
								))
						) : (
							<Loader
								loaded={state.loading}
								color="#2396F3"
								top="500px"
							/>
						)}
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
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ fetchTickets }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
