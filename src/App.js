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
import { fetchTickets, setSortBy, setFilter } from './Actions/ticketsActions'

const App = ({ state, fetchTickets, setSortBy, setFilter }) => {
	useEffect(
		() => {
			fetchTickets()
		},
		[ fetchTickets ]
	)

	let filteredTickets = state.tickets
	if (state.tickets) {
		switch (state.filter) {
			case 'ALL':
				filteredTickets = state.tickets
				break

			case 'NO_TRANSFERS':
				filteredTickets = filteredTickets.filter(
					(ticket) =>
						ticket.segments[0].stops.length === 0 &&
						ticket.segments[1].stops.length === 0
				)
				break

			case 'ONE_TRANSFER':
				filteredTickets = filteredTickets.filter(
					(ticket) =>
						ticket.segments[0].stops.length === 1 &&
						ticket.segments[1].stops.length === 1
				)
				break

			case 'TWO_TRANSFERS':
				filteredTickets = filteredTickets.filter(
					(ticket) =>
						ticket.segments[0].stops.length === 2 &&
						ticket.segments[1].stops.length === 2
				)
				break

			case 'THREE_TRANSFERS':
				filteredTickets = filteredTickets.filter(
					(ticket) =>
						ticket.segments[0].stops.length === 3 &&
						ticket.segments[1].stops.length === 3
				)
				break
		}

		switch (state.sortBy) {
			case 'cheapest':
				filteredTickets = filteredTickets.sort(
					(a, b) => (a.price > b.price ? 1 : -1)
				)
				break

			case 'fastest':
				filteredTickets = filteredTickets.sort(
					(a, b) =>
						a.segments[0].duration + a.segments[1].duration >
						b.segments[0].duration + b.segments[1].duration
							? 1
							: -1
				)
				break
		}
	}

	return (
		<Fragment>
			<Header />
			<Container>
				<Controls>
					<Filters setFilter={setFilter} />
					<div style={{ marginLeft: 20, marginBottom: 20 }}>
						<Sort setSortBy={setSortBy} sortBy={state.sortBy} />
						{filteredTickets ? (
							filteredTickets
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
	bindActionCreators({ fetchTickets, setSortBy, setFilter }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
