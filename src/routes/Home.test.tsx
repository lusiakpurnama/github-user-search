import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRoute } from '~test/utils'
import { createMemoryHistory } from 'history'
import { Home } from './Home'

let pushSpy: jest.SpyInstance

const render = () => {
	const history = createMemoryHistory()
	pushSpy = jest.spyOn(history, 'push')
	return renderWithRoute(<Home />, '/', '/', history)
}

test('renders form', () => {
	render()
	expect(screen.getByTestId('RouteHome')).toBeInTheDocument()

	const inputEl = screen.getByLabelText(/Enter a username/)
	expect(inputEl).toBeInTheDocument()

	const buttonEl = screen.getByText(/^Search$/)
	expect(buttonEl).toBeInTheDocument()
})

test('button disabled if empty', () => {
	render()

	const inputEl = screen.getByLabelText(/Enter a username/)
	const buttonEl = screen.getByText(/^Search$/)
	expect(buttonEl).toBeDisabled()

	userEvent.type(inputEl, 'username')
	expect(buttonEl).toBeEnabled()
})

test('navigate on submit', () => {
	render()

	const inputEl = screen.getByLabelText(/Enter a username/)
	const buttonEl = screen.getByText(/^Search$/)

	const username = '<username>'
	userEvent.type(inputEl, username)
	userEvent.click(buttonEl)

	expect(pushSpy).toHaveBeenCalledWith(`/user/${username}`)
})
