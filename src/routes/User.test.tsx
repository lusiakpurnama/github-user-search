import { screen, cleanup } from '@testing-library/react'
import { renderWithRoute } from '~test/utils'
import { User } from './User'

const render = (username: string) => {
	return renderWithRoute(<User />, '/user/:username', `/user/${username}`)
}

test('display title and loading indicator', () => {
	const username = '<username>'
	render(username)

	expect(screen.getByTestId('RouteUser')).toBeInTheDocument()
	expect(screen.getByText(username)).toBeInTheDocument()
	expect(screen.getByText(`Fetching user ${username}`)).toBeInTheDocument()

	cleanup()
})
