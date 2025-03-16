import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from '@/components/ui/textarea'

describe('Textarea Component', () => {
  it('renders a textarea element', () => {
    render(<Textarea />)
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Textarea className="test-class" />)
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('test-class')
  })

  it('forwards props correctly', () => {
    render(<Textarea placeholder="Enter text here" rows={6} disabled />)
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('placeholder', 'Enter text here')
    expect(textarea).toHaveAttribute('rows', '6')
    expect(textarea).toBeDisabled()
  })

  it('handles user input', async () => {
    const user = userEvent.setup()
    render(<Textarea />)
    
    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'Hello, world!')
    
    expect(textarea).toHaveValue('Hello, world!')
  })

  it('forwards ref to the textarea element', () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    
    render(<Textarea ref={ref} />)
    
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
}) 