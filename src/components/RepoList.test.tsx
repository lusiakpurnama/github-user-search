import { screen, cleanup } from '@testing-library/react'
import { renderWithRoute, fetchMock } from '~test/utils'
import { RepoList } from './RepoList'

const render = (username: string) => {
	return renderWithRoute(<RepoList username={username} />)
}

test('display loading indicator', () => {
	const username = '<username>'
	render(username)

	expect(screen.getByText(`Fetching user ${username}`)).toBeInTheDocument()

	cleanup()
})

test('display error when fetch error', async () => {
	fetchMock.mockRejectOnce(new Error('Error message'))
	const username = '<invalid username>'
	const { findByText } = render(username)

	const element = await findByText(`User ${username} not found`)
	expect(element).toBeInTheDocument()
})

test('display list of files and folder on success', async () => {
	const username = '<username>'
	const resp = [
		{ id: 1, full_name: `${username}/repo1` },
		{ id: 2, full_name: `${username}/repo2` },
		{ id: 3, full_name: `${username}/repo3` },
	]
	fetchMock.mockResponseOnce(JSON.stringify(resp))

	const { findByText } = render(username)

	const el1 = await findByText(resp[0].full_name)
	expect(el1).toBeInTheDocument()
	const el2 = await findByText(resp[1].full_name)
	expect(el2).toBeInTheDocument()
	const el3 = await findByText(resp[2].full_name)
	expect(el3).toBeInTheDocument()
})
