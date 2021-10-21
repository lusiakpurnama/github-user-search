import { render, screen } from '@testing-library/react'
import { FetchLoading } from './FetchLoading'

test('renders loading spinner', () => {
	const title = '<Loading Title>'
	render(<FetchLoading title={title} />)

	const textEl = screen.getByText(title)
	expect(textEl).toBeInTheDocument()

	const statusEl = screen.getByRole('status')
	expect(statusEl).toBeInTheDocument()
})
