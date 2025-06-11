import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
    it('renders user name', () => {
        render(<UserAccount user={{id: 1, name: "Andrew", isAdmin: true}} />)
        const userName = screen.getByText('Andrew') // Name
        expect(userName).toBeInTheDocument()
    });
    it('renders edit button for admin', () => {
        render(<UserAccount user={{id: 1, name: "Andrew", isAdmin: true}} />)
        const editButton = screen.queryByRole('button') // getByRole results in error for non-instance
        expect(editButton).toBeInTheDocument()
        expect(editButton).toHaveTextContent(/edit/i)
    });
    it('does not render edit button for non-admins', () => {
        render(<UserAccount user={{id: 1, name: "Andrew", isAdmin: false}} />)
        const editButton = screen.queryByRole('button') // Edit
        expect(editButton).not.toBeInTheDocument()
    });
})