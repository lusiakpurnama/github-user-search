import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Page404 } from './Page404'

test('renders link to homepage', () => {
	render(
		<MemoryRouter>
			<Page404 />
		</MemoryRouter>
	)

	const textEl = screen.getByText('No page found')
	expect(textEl).toBeInTheDocument()

	const linkEl = screen.getByText('Return to Home')
	expect(linkEl).toBeInTheDocument()
})
