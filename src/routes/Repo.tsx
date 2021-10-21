import { Link, useParams } from 'react-router-dom'

import { RepoContent } from '~/components/RepoContent'

interface ParamTypes {
	username: string
	repo: string
	path: string
}

export const Repo = () => {
	const { username, repo, path } = useParams<ParamTypes>()

	let paths: string[] = []
	if (path) {
		paths = path.split('/')
	}

	return (
		<div className="container my-5" data-testid="RouteRepo">
			<h1 className="mb-3">
				<Link to={`/user/${username}`}>{username}</Link>/
				<Link to={`/user/${username}/${repo}`}>{repo}</Link>
				{paths &&
					paths.map((p, i) => (
						<>
							/
							<Link
								to={`/user/${username}/${repo}/${paths
									.slice(0, i + 1)
									.join('/')}`}
							>
								{p}
							</Link>
						</>
					))}
			</h1>

			<RepoContent username={username} repo={repo} path={path} />
		</div>
	)
}
