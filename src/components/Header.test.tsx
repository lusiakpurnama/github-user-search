import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'

test('renders title', () => {
	render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	)

	const brandEl = screen.getByText(/Github User Search/)
	expect(brandEl).toBeInTheDocument()
})
