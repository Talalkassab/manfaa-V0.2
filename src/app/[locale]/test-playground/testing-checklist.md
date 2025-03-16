# UI Component Manual Testing Checklist

This document provides a comprehensive checklist for testing the UI components of the Manfaa Business Marketplace application.

## General Guidelines for Manual Testing

1. Test each component in isolation to verify its basic functionality
2. Test components in context within actual application pages
3. Verify all interactive states (default, hover, active, disabled)
4. Test across different screen sizes (mobile, tablet, desktop)
5. Test keyboard accessibility for all interactive components
6. Test with screen readers to verify accessibility
7. Verify that RTL (Right-to-Left) layout works correctly for Arabic

## Component-Specific Testing Checklists

### Spinner Component

- [ ] Renders in all sizes (small, medium, large)
- [ ] Accepts and applies custom classNames
- [ ] Animation works smoothly
- [ ] Properly centered when used inline or as a page loader
- [ ] Screen reader accessibility (aria-label is present)
- [ ] Renders correctly in dark mode

### Textarea Component

- [ ] Renders with default placeholder text
- [ ] Accepts and displays user input
- [ ] Disabled state prevents interaction
- [ ] Custom rows property works correctly
- [ ] Resizing works as expected (if enabled)
- [ ] Focus states apply correctly
- [ ] Error state styling works properly
- [ ] Keyboard interaction works as expected
- [ ] Screen reader reads the associated label

### RadioGroup Component

- [ ] Renders all options correctly
- [ ] Selection state is visible
- [ ] Clicking an option selects it
- [ ] Disabled options cannot be selected
- [ ] Value change callback works correctly
- [ ] Works in both horizontal and vertical layouts
- [ ] Tab navigation works correctly
- [ ] Keyboard selection (Space key) works
- [ ] Screen reader announces options correctly

### Input Component

- [ ] Renders with default placeholder
- [ ] Accepts and displays user input
- [ ] Type restrictions work (number, email, etc.)
- [ ] Min/max values are enforced for number inputs
- [ ] Disabled state prevents interaction
- [ ] Focus states apply correctly
- [ ] Error state styling works properly
- [ ] Required validation works
- [ ] Screen reader reads the associated label

### Button Component

- [ ] All variants render correctly (default, destructive, outline, etc.)
- [ ] All sizes render correctly (small, medium, large)
- [ ] Hover state styling applies correctly
- [ ] Active/pressed state styling applies correctly
- [ ] Disabled state prevents interaction
- [ ] Full-width option works correctly on mobile
- [ ] Buttons with icons align content properly
- [ ] Loading state renders spinner correctly
- [ ] Keyboard activation works (Enter key)
- [ ] Screen reader announces button text and state

## Testing Complex Components

### ProfileForm Component

- [ ] Form renders with initial values when provided
- [ ] Required field validation works
- [ ] Error messages display correctly
- [ ] Image upload preview works
- [ ] Progress indicator shows during image upload
- [ ] Conditional fields appear/disappear based on selections
- [ ] Form submission works
- [ ] Loading state during submission disables the form
- [ ] Success message appears after successful submission
- [ ] Error messages appear after failed submission
- [ ] Form is keyboard navigable
- [ ] Screen reader can navigate and interact with all form elements

## Cross-Browser Testing

Test all components in the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome for Android

## Responsive Design Testing

Test all components at these screen sizes:
- [ ] Mobile (<640px)
- [ ] Tablet (768px-1024px)
- [ ] Desktop (>1024px)

## Accessibility Testing

- [ ] All interactive elements can be accessed via keyboard
- [ ] Focus order is logical
- [ ] Focus states are visible
- [ ] Screen reader announces all content correctly
- [ ] Color contrast meets WCAG AA standards
- [ ] Aria attributes are used correctly where needed

## How to Report Issues

When reporting issues discovered during manual testing, include:

1. Component name
2. Expected behavior
3. Actual behavior
4. Steps to reproduce
5. Screenshots or video if applicable
6. Browser/device information
7. Severity level (Critical, High, Medium, Low)

Example:

```
Component: Button
Expected: Button should be disabled during form submission
Actual: Button remains clickable during submission
Steps: 1. Fill out form 2. Click submit 3. Quickly click submit again
Screenshot: [attached]
Browser: Chrome 115.0
Severity: High
``` 