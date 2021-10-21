import { screen, cleanup } from '@testing-library/react'
import { renderWithRoute, fetchMock } from '~test/utils'
import { encodeBase64 } from '~/common/utils'
import { RepoContent } from './RepoContent'

const render = (username: string, repo: string, path: string) => {
	return renderWithRoute(
		<RepoContent username={username} repo={repo} path={path} />
	)
}

test('display loading indicator', () => {
	const username = '<username>'
	const repo = '<repo>'
	const path = '<path>'
	render(username, repo, path)

	expect(screen.getByText(`Fetching ${username}/${repo}`)).toBeInTheDocument()

	cleanup()
})

test('display error when fetch error', async () => {
	fetchMock.mockRejectOnce(new Error('Error message'))
	const username = '<username>'
	const repo = '<invalid repo>'
	const path = '<path>'
	const { findByText } = render(username, repo, path)

	const element = await findByText(`Fetching ${username}/${repo} error`)
	expect(element).toBeInTheDocument()
})

test('display list of files and folder on success', async () => {
	const username = '<username>'
	const repo = '<repo1>'
	const path = '<path>'
	const resp = [
		{ type: 'dir', name: 'dir1', sha: 'dir1_sha', path: 'dir1' },
		{ type: 'dir', name: 'dir2', sha: 'dir2_sha', path: 'dir2' },
		{ type: 'file', name: 'file1', sha: 'file1_sha' },
		{ type: 'file', name: 'file2', sha: 'file2_sha' },
	]
	const resp2 = {}
	fetchMock
		.mockResponseOnce(JSON.stringify(resp))
		.mockResponseOnce(JSON.stringify(resp2))

	const { findByText } = render(username, repo, path)

	const el1 = await findByText(resp[0].name)
	expect(el1).toBeInTheDocument()
	const el2 = await findByText(resp[1].name)
	expect(el2).toBeInTheDocument()
	const el3 = await findByText(resp[2].name)
	expect(el3).toBeInTheDocument()
	const el4 = await findByText(resp[2].name)
	expect(el4).toBeInTheDocument()
})

test('display readme content if available and in home path', async () => {
	const username = '<username>'
	const repo = '<repo2>'
	const path = ''
	const readmeContent = '<readme content>'
	const resp = [{ type: 'file', name: 'file1', sha: 'file1_sha' }]
	const resp2 = {
		type: 'file',
		name: 'readme.md',
		sha: 'readme_sha',
		content: encodeBase64(readmeContent),
	}
	fetchMock
		.mockResponseOnce(JSON.stringify(resp))
		.mockResponseOnce(JSON.stringify(resp2))

	const { findByText } = render(username, repo, path)

	const readme = await findByText(readmeContent)
	expect(readme).toBeInTheDocument()
})
