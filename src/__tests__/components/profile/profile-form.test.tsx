import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProfileForm } from '@/components/profile/profile-form'
import { useSupabaseAuth } from '@/providers/supabase-auth-provider'

// Mock the useSupabaseAuth hook
jest.mock('@/providers/supabase-auth-provider', () => ({
  useSupabaseAuth: jest.fn(),
}))

// Mock the next/navigation useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}))

// Mock the next-intl useTranslations hook - already done in jest.setup.js

describe('ProfileForm Component', () => {
  beforeEach(() => {
    // Set up the mocked useSupabaseAuth hook
    (useSupabaseAuth as jest.Mock).mockReturnValue({
      user: {
        id: 'test-user-id',
        user_metadata: {
          full_name: 'Test User',
          user_type: 'buyer',
          preferred_language: 'en',
        },
      },
      refreshSession: jest.fn().mockResolvedValue({}),
    })
  })

  it('renders the form with initial values', () => {
    render(<ProfileForm isSetup={false} />)
    
    // Check if form elements are rendered
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue('Test User')
    
    // Check radio buttons
    const buyerRadio = screen.getByLabelText(/Buyer/i)
    expect(buyerRadio).toBeInTheDocument()
    expect(buyerRadio).toBeChecked()
    
    // Check button text
    expect(screen.getByRole('button', { name: /Update Profile/i })).toBeInTheDocument()
  })
  
  it('shows "Save and Continue" button for setup mode', () => {
    render(<ProfileForm isSetup={true} />)
    
    expect(screen.getByRole('button', { name: /Save and Continue/i })).toBeInTheDocument()
  })
  
  it('shows company name field when user type is seller', async () => {
    const user = userEvent.setup()
    render(<ProfileForm isSetup={false} />)
    
    // Initially the company name field should not be visible
    expect(screen.queryByLabelText(/Company Name/i)).not.toBeInTheDocument()
    
    // Change user type to seller
    const sellerRadio = screen.getByLabelText(/Seller/i)
    await user.click(sellerRadio)
    
    // Company name field should now be visible
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument()
  })
  
  it('shows validation error for empty required fields', async () => {
    const user = userEvent.setup()
    render(<ProfileForm isSetup={true} />)
    
    // Clear the full name field
    const fullNameInput = screen.getByLabelText(/Full Name/i)
    await user.clear(fullNameInput)
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /Save and Continue/i })
    await user.click(submitButton)
    
    // Check if validation error is shown
    await waitFor(() => {
      expect(screen.getByText(/Full name must be at least 3 characters/i)).toBeInTheDocument()
    })
  })
}) 