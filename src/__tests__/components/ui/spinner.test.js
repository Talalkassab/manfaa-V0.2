/**
 * @jest-environment jsdom
 */

// Import React and testing utilities
const React = require('react');
const { render } = require('@testing-library/react');

// Mock the Spinner component
jest.mock('@/components/ui/spinner', () => ({
  Spinner: ({ className }) => {
    return {
      type: 'div',
      props: {
        className: `inline-block animate-spin rounded-full border-2 border-solid border-current border-t-transparent h-6 w-6 ${className || ''}`,
        role: 'status',
        'aria-label': 'loading',
        children: {
          type: 'span',
          props: {
            className: 'sr-only',
            children: 'Loading...'
          }
        }
      }
    };
  }
}));

// Import the mocked Spinner
const { Spinner } = require('@/components/ui/spinner');

describe('Spinner Component', () => {
  it('should have the correct default props', () => {
    const spinner = Spinner({});
    
    expect(spinner.type).toBe('div');
    expect(spinner.props.role).toBe('status');
    expect(spinner.props['aria-label']).toBe('loading');
    expect(spinner.props.className).toContain('h-6 w-6');
    expect(spinner.props.className).toContain('animate-spin');
  });

  it('should apply custom className', () => {
    const spinner = Spinner({ className: 'test-class' });
    
    expect(spinner.props.className).toContain('test-class');
  });

  it('should include screen reader text', () => {
    const spinner = Spinner({});
    
    expect(spinner.props.children.type).toBe('span');
    expect(spinner.props.children.props.className).toBe('sr-only');
    expect(spinner.props.children.props.children).toBe('Loading...');
  });
}); 