// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(() => ({ get: jest.fn() })),
}))

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockImplementation(() => (key) => key),
}))

// Mock Supabase
jest.mock('@supabase/supabase-js', () => {
  const mockStorage = {
    from: jest.fn().mockReturnValue({
      upload: jest.fn().mockResolvedValue({ data: {}, error: null }),
      getPublicUrl: jest.fn().mockReturnValue({ data: { publicUrl: 'http://example.com/image.jpg' } }),
    }),
  }

  const mockAuth = {
    getUser: jest.fn().mockResolvedValue({ data: { user: { id: 'test-user-id' } }, error: null }),
    updateUser: jest.fn().mockResolvedValue({ data: {}, error: null }),
  }

  return {
    createClient: jest.fn().mockImplementation(() => ({
      from: jest.fn().mockReturnValue({
        select: jest.fn().mockReturnThis(),
        insert: jest.fn().mockReturnThis(),
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockResolvedValue({ data: {}, error: null }),
      }),
      storage: mockStorage,
      auth: mockAuth,
    })),
  }
})

// Mock the URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => 'http://localhost:3000/mock-url')
global.URL.revokeObjectURL = jest.fn() 