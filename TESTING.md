# Testing Plan for Manfaa Business Marketplace

This document outlines the testing strategy for the Manfaa Business Marketplace application.

## Testing Environment

The project uses the following testing tools:

- **Jest**: JavaScript testing framework
- **React Testing Library**: For testing React components
- **@testing-library/user-event**: For simulating user interactions
- **jest-environment-jsdom**: For simulating a DOM environment

## Test Types

### 1. Unit Testing

Unit tests focus on testing individual components and functions in isolation.

#### Components to Test:

- **UI Components**
  - Spinner
  - Textarea
  - RadioGroup
  - Button
  - Input
  - etc.

- **Form Components**
  - ProfileForm
  - AuthForms (Login, Register, etc.)

- **Layout Components**
  - Header
  - Footer
  - Sidebar
  - etc.

### 2. Integration Testing

Integration tests focus on testing how components work together.

#### Flows to Test:

- **Authentication Flow**
  - Registration
  - Login
  - Password Reset
  - Email Verification

- **Profile Management Flow**
  - Profile Setup
  - Profile Editing
  - Image Upload

- **Business Management Flow**
  - Business Creation
  - Business Editing
  - Business Listing

### 3. End-to-End Testing

End-to-end tests simulate real user scenarios from start to finish.

#### User Journeys to Test:

- **New User Onboarding**
  - Register → Email Verification → Profile Setup → Dashboard

- **Business Creation**
  - Login → Create Business → Add Business Details → Publish

- **Service Listing**
  - Login → Create Service → Add Service Details → Publish

### 4. Accessibility Testing

Ensure the application is accessible to all users.

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast

### 5. Performance Testing

Measure and optimize application performance.

- Page load times
- Image upload performance
- Form submission performance

## Test Organization

Tests are organized in the following directory structure:

```
src/
└── __tests__/
    ├── components/
    │   ├── ui/
    │   ├── profile/
    │   ├── auth/
    │   └── ...
    ├── pages/
    ├── hooks/
    └── utils/
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Continuous Integration

Tests are automatically run on GitHub Actions for:
- Pull requests to main branch
- Pushes to main branch

## Test Coverage Goals

- Unit Tests: 80% coverage
- Integration Tests: Key user flows covered
- E2E Tests: Critical user journeys covered

## Mocking Strategy

- **Supabase**: Mock API responses for authentication, database, and storage operations
- **Next.js Router**: Mock navigation functions
- **Internationalization**: Mock translation functions

## Test Data Management

- Use fixtures for test data
- Reset test state between tests
- Use unique identifiers for test data to avoid conflicts 