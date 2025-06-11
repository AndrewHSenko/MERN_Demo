import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '@auth0/auth0-react'

describe('UserList', () => {
    it('should render no users when users array is empty', () => {
        render(<UserList users={[]}/>)
        expect(screen.getByText(/no users/i)).toBeInTheDocument()
    })
    it('should render list of users', () => {
        const users: User[] = [{id: 1, name: 'Mosh'}, {id: 2, name:'John'}]
        render(<UserList users={users} />)
        users.forEach(user => {
            const link = screen.getByRole('link', {name: user.name})
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', `/users/${user.id}`)
        })
    })
})