import React from 'react'
import { render, screen } from '@testing-library/react'
import { Spinner } from '@/components/ui/spinner'

describe('Spinner Component', () => {
  it('renders a spinner with default size (medium)', () => {
    render(<Spinner />)
    
    // Check if the spinner is in the document
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
    
    // Check if it has the medium size class
    expect(spinner).toHaveClass('h-6 w-6')
  })

  it('renders a spinner with small size', () => {
    render(<Spinner size="small" />)
    
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('h-4 w-4')
  })

  it('renders a spinner with large size', () => {
    render(<Spinner size="large" />)
    
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('h-8 w-8')
  })

  it('applies custom className', () => {
    render(<Spinner className="test-class" />)
    
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('test-class')
  })

  it('includes screen reader text', () => {
    render(<Spinner />)
    
    const srText = screen.getByText('Loading...')
    expect(srText).toBeInTheDocument()
    expect(srText).toHaveClass('sr-only')
  })
}) 