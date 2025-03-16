import React from 'react';

interface LoadingIndicatorProps {
  text?: string;
}

const LoadingIndicator = ({ text = 'Loading...' }: LoadingIndicatorProps) => {
  return (
    <div className="inline-block bg-gray-100 rounded-md px-6 py-3 text-gray-600">
      {text}
    </div>
  );
};

export default LoadingIndicator; 