import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

describe('RadioGroup Component', () => {
  it('renders a radio group with items', () => {
    render(
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    
    const radioButtons = screen.getAllByRole('radio')
    expect(radioButtons).toHaveLength(2)
    expect(radioButtons[0]).toBeChecked()
    expect(radioButtons[1]).not.toBeChecked()
  })

  it('applies custom className to the RadioGroup', () => {
    render(
      <RadioGroup className="test-class">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>
    )
    
    const radioGroup = screen.getByRole('radiogroup')
    expect(radioGroup).toHaveClass('test-class')
  })

  it('applies custom className to the RadioGroupItem', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" id="option1" className="test-item-class" />
      </RadioGroup>
    )
    
    const radioButton = screen.getByRole('radio')
    expect(radioButton).toHaveClass('test-item-class')
  })

  it('handles value changes', async () => {
    const handleValueChange = jest.fn()
    const user = userEvent.setup()
    
    render(
      <RadioGroup onValueChange={handleValueChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    
    const secondRadio = screen.getByLabelText('Option 2')
    await user.click(secondRadio)
    
    expect(handleValueChange).toHaveBeenCalledWith('option2')
  })

  it('forwards props correctly', () => {
    render(
      <RadioGroup name="test-name" required>
        <RadioGroupItem value="option1" id="option1" disabled />
      </RadioGroup>
    )
    
    const radioButton = screen.getByRole('radio')
    expect(radioButton).toHaveAttribute('name', 'test-name')
    expect(radioButton).toHaveAttribute('required')
    expect(radioButton).toBeDisabled()
  })
}) 