import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from '~/common/utils'

import { FetchError } from '~/components/FetchError'
import { FetchLoading } from '~/components/FetchLoading'

interface ParamTypes {
	username: string
}

interface Repo {
	id: number
	full_name: string
}

export const RepoList = ({ username }: ParamTypes) => {
	const { data, error } = useSWR<Repo[]>(
		`https://api.github.com/users/${username}/repos`,
		fetcher,
		{ shouldRetryOnError: false }
	)

	if (error) return <FetchError title={`Fetching user ${username} error`} />

	if (!data) return <FetchLoading title={`Fetching user ${username}`} />

	return (
		<div>
			{data.map((repo) => (
				<div key={repo.id}>
					<Link to={`/user/${repo.full_name}/`}>{repo.full_name}</Link>
				</div>
			))}
		</div>
	)
}
