import { screen, cleanup } from '@testing-library/react'
import { renderWithRoute } from '~test/utils'
import { Repo } from './Repo'

const render = (username: string, repo: string) => {
	return renderWithRoute(
		<Repo />,
		'/user/:username/:repo',
		`/user/${username}/${repo}`
	)
}

test('display title and loading indicator', () => {
	const username = '<username>'
	const repo = '<repo>'
	render(username, repo)

	expect(screen.getByTestId('RouteRepo')).toBeInTheDocument()
	expect(screen.getByText(`${username}/${repo}`)).toBeInTheDocument()
	expect(screen.getByText(`Fetching ${username}/${repo}`)).toBeInTheDocument()

	cleanup()
})
