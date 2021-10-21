import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export const Home = () => {
	const [username, setUsername] = useState('')

	const history = useHistory()
	const submitUsername = () => {
		history.push(`/user/${username}`)
	}

	return (
		<div className="container mt-5" data-testid="RouteHome">
			<h1 className="mb-3">Github Search</h1>

			<div className="row">
				<div className="col-md-6 mb-3">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Enter a username"
							aria-label="Enter a username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<button
							type="button"
							className="btn btn-primary"
							disabled={username.length === 0}
							onClick={submitUsername}
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
