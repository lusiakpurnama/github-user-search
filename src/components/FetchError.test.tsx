import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { FetchError } from './FetchError'

test('renders title', () => {
	const title = '<Error Title>'
	render(
		<MemoryRouter>
			<FetchError title={title} />
		</MemoryRouter>
	)

	const textEl = screen.getByText(title)
	expect(textEl).toBeInTheDocument()

	const linkEl = screen.getByText(/Return to Home/)
	expect(linkEl).toBeInTheDocument()
})
