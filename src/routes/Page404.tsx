import { Link } from 'react-router-dom'

export const Page404 = () => {
	return (
		<div className="container mt-5" data-testid="Route404">
			<h1 className="mb-3">No page found</h1>
			<Link to="/">Return to Home</Link>
		</div>
	)
}
