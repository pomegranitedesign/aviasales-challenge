import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import App from './App'
import rootReducer from './Reducers'
import { saveState, loadState } from './misc'
import './index.css'

const store = createStore(
	rootReducer,
	// loadState(),
	composeWithDevTools(applyMiddleware(thunk))
)
store.subscribe(() => {
	console.log(store.getState())
	// saveState(store.getState())
})

render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
