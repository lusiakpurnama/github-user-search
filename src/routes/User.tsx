import { useParams } from 'react-router-dom'

import { RepoList } from '~/components/RepoList'

interface ParamTypes {
	username: string
}

export const User = () => {
	const { username } = useParams<ParamTypes>()

	return (
		<div className="container my-5" data-testid="RouteUser">
			<h1 className="mb-3">{username}</h1>

			<RepoList username={username} />
		</div>
	)
}
