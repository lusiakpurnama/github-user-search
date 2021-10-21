import { Link } from 'react-router-dom'

interface Props {
	title: string
}

export const FetchError = (props: Props) => {
	return (
		<div data-testid="FetchError">
			<p>{props.title}</p>
			<Link to="/">Return to Home</Link>
		</div>
	)
}
