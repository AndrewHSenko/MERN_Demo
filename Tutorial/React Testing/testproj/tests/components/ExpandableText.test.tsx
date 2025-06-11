import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event'

describe('ExpandableText', () => {
const limit = 255
const longText = 'a'.repeat(limit + 1)
const truncated = longText.substring(0, limit) + "..."

    it('renders full text if less than 255 characters', () => {
        render(<ExpandableText text={"hello"} />)
        expect(screen.getByText("hello")).toBeInTheDocument();
    })
   
    it('truncates if longer than 255 characters', () => {
        render(<ExpandableText text={longText} />)
        expect(screen.getByText(truncated)).toBeInTheDocument();
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/more/i)

    })

    it('expand text if "show more" button clicked', async () => {
        render(<ExpandableText text={longText} />)
        const button = screen.getByRole('button')
        const user = userEvent.setup()
        await user.click(button)
        expect(screen.getByText(longText)).toBeInTheDocument()
        expect(button).toHaveTextContent(/less/i)
        
    })
    it('collapse text if "show less" button clicked', async () => {
        render(<ExpandableText text={longText} />)
        const showmorebutton = screen.getByRole('button', { name: /more/i })
        const user = userEvent.setup()
        await user.click(showmorebutton)
        const showlessbutton = screen.getByRole('button', {name: /less/i})
        await user.click(showlessbutton)
        expect(screen.getByText(truncated)).toBeInTheDocument()
        expect(showmorebutton).toHaveTextContent(/more/i)
        
    })
})