import { Link } from 'react-router-dom'
import useSWR from 'swr'
import Markdown from 'markdown-to-jsx'
import { decodeBase64, fetcher } from '~/common/utils'

import { FetchError } from '~/components/FetchError'
import { FetchLoading } from '~/components/FetchLoading'

interface ParamTypes {
	username: string
	repo: string
	path: string
}

interface File {
	type: string
	name: string
	path: string
	content?: string
	sha: string
}

export const RepoContent = ({ username, repo, path }: ParamTypes) => {
	const pathParam = path ? `/${path}` : ''
	const { data, error } = useSWR<File[]>(
		`https://api.github.com/repos/${username}/${repo}/contents${pathParam}`,
		fetcher,
		{ shouldRetryOnError: false }
	)

	const { data: readme, error: readmeError } = useSWR<File>(
		`https://api.github.com/repos/${username}/${repo}/readme`,
		fetcher,
		{ shouldRetryOnError: false }
	)

	if (error || readmeError)
		return <FetchError title={`Fetching ${username}/${repo} error`} />

	if (!data || !readme)
		return <FetchLoading title={`Fetching ${username}/${repo}`} />

	return (
		<div>
			{data.map((file) =>
				file.type === 'dir' ? (
					<div key={file.sha}>
						<Link to={`/user/${username}/${repo}/${file.path}`}>
							{file.name}
						</Link>
					</div>
				) : (
					<div key={file.sha}>{file.name}</div>
				)
			)}

			{!path && readme.content && (
				<div className="mt-5 border rounded py-3 px-4">
					<Markdown>{decodeBase64(readme.content)}</Markdown>
				</div>
			)}
		</div>
	)
}
