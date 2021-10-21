import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { App } from './App'

test('renders homepage', () => {
	const history = createMemoryHistory()
	render(
		<Router history={history}>
			<App />
		</Router>
	)
	expect(screen.getByTestId('RouteHome')).toBeInTheDocument()
})

test('renders 404', () => {
	const history = createMemoryHistory()
	history.push('/some/bad/route')
	render(
		<Router history={history}>
			<App />
		</Router>
	)
	expect(screen.getByTestId('Route404')).toBeInTheDocument()
})
