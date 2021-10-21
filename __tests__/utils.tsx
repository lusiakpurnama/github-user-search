import React, { ReactElement } from 'react'
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react'
import { FetchMock } from 'jest-fetch-mock'

export const renderWithRoute = (
	ui: ReactElement,
	path = '/',
	route = '/',
	history = createMemoryHistory({ initialEntries: [route] })
) => {
	return {
		...render(
			<Router history={history}>
				<Route path={path}>{ui}</Route>
			</Router>
		),
		history,
	}
}

export const fetchMock = fetch as FetchMock
