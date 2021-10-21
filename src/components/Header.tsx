import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">
					Github User Search
				</Link>
			</div>
		</nav>
	)
}
